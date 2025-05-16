import type {DefinedEntities} from "./getDefinedEntities.mts"

function generateImportCode(definedEntities: DefinedEntities) {
	let code = ``

	for (const [entityName, entityMap] of definedEntities.entries()) {
		for (const [majorVersion, revisions] of entityMap.entries()) {
			for (const revision of revisions) {
				code += `import type {Definition as ${revision.importAliasName}Definition} from "${revision.importPath}"\n`
			}
		}
	}

	return code
}

function generateEntityTypeCode(definedEntities: DefinedEntities) {
	let code = ``

	for (const [entityName, entityMap] of definedEntities.entries()) {
		for (const [majorVersion, revisions] of entityMap.entries()) {
			for (const revision of revisions) {
				code += `export type ${revision.importAliasName} = ${revision.entityType(
					`${revision.importAliasName}Definition`
				)}\n`
			}
		}
	}

	return code
}

function generateEntityByMajorTypeCode(definedEntities: DefinedEntities) {
	let code = ``

	for (const [entityName, entityMap] of definedEntities.entries()) {
		for (const [majorVersion, revisions] of entityMap.entries()) {
			code += `export type ${entityName}_V${majorVersion} = `
			code += revisions.map(r => r.importAliasName).join(" | ")
			code += `\n`
		}
	}

	return code
}

function generateEntityByKindTypeCode(definedEntities: DefinedEntities) {
	let code = ``

	for (const [entityName, entityMap] of definedEntities.entries()) {
		code += `export type ${entityName} = `

		let tmp = []

		for (const [majorVersion] of entityMap.entries()) {
			tmp.push(`${entityName}_V${majorVersion}`)
		}

		code += tmp.join(" | ")
		code += `\n`
	}

	return code
}

export function generateAllEntitiesCode(definedEntities: DefinedEntities) {
	let code = ``

	code += `import type {DefineEntity} from "#~src/DefineEntity.mts"\n`
	code += `\n`
	code += generateImportCode(definedEntities)
	code += `\n`
	code += generateEntityTypeCode(definedEntities)
	code += `\n`
	code += generateEntityByMajorTypeCode(definedEntities)
	code += `\n`
	code += generateEntityByKindTypeCode(definedEntities)
	code += `\n`

	code += `export type AllDefinedEntities = `

	let tmp = []

	for (const [entityName] of definedEntities.entries()) {
		tmp.push(entityName)
	}

	code += tmp.join(" | ")
	code += `\n`

	return code
}
