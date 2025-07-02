import type {DefinedAPIs} from "./getDefinedAPIs.mts"

function generateImportCode(definedAPIs: DefinedAPIs) {
	let code = ``

	for (const [apiID, apiMap] of definedAPIs.entries()) {
		for (const [majorVersion, revisions] of apiMap.entries()) {
			for (const revision of revisions) {
				code += `import type {Definition as ${revision.importAliasName}Definition} from "${revision.importPath}"\n`
			}
		}
	}

	return code
}

function generateAPITypeCode(definedAPIs: DefinedAPIs) {
	let code = ``

	for (const [apiID, apiMap] of definedAPIs.entries()) {
		for (const [majorVersion, revisions] of apiMap.entries()) {
			for (const revision of revisions) {
				code += `export type ${revision.importAliasName} = ${revision.apiType(
					`${revision.importAliasName}Definition`
				)}\n`
			}
		}
	}

	return code
}

function generateAPIByMajorTypeCode(definedAPIs: DefinedAPIs) {
	let code = ``

	for (const [apiID, apiMap] of definedAPIs.entries()) {
		for (const [majorVersion, revisions] of apiMap.entries()) {
			code += `export type ${apiID}_V${majorVersion} = `
			code += revisions.map(r => r.importAliasName).join(" | ")
			code += `\n`
		}
	}

	return code
}

function generateAPIByKindTypeCode(definedAPIs: DefinedAPIs) {
	let code = ``

	for (const [apiID, apiMap] of definedAPIs.entries()) {
		code += `export type ${apiID} = `

		let tmp = []

		for (const [majorVersion] of apiMap.entries()) {
			tmp.push(`${apiID}_V${majorVersion}`)
		}

		code += tmp.join(" | ")
		code += `\n`
	}

	return code
}

export function generateAllAPIsCode(definedAPIs: DefinedAPIs) {
	let code = ``

	code += `import type {DefineAPI} from "#~src/DefineAPI.ts"\n`
	code += `\n`
	code += generateImportCode(definedAPIs)
	code += `\n`
	code += generateAPITypeCode(definedAPIs)
	code += `\n`
	code += generateAPIByMajorTypeCode(definedAPIs)
	code += `\n`
	code += generateAPIByKindTypeCode(definedAPIs)
	code += `\n`

	code += `export type AllDefinedAPIs = `

	let tmp = []

	for (const [apiID] of definedAPIs.entries()) {
		tmp.push(apiID)
	}

	code += tmp.join(" | ")
	code += `\n`

	return code
}
