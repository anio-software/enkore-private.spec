export function generateEntityFactoryCode(
	factoryName,
	entityName,
	importPath,
	majorVersion,
	revision
) {
	return `
import type {Definition} from "${importPath}"
import {createEntity} from "#~export/createEntity.mts"

export function ${factoryName}(data: Definition) {
	return createEntity("${entityName}", ${majorVersion}, ${revision}, data)
}
`.slice(1)
}
