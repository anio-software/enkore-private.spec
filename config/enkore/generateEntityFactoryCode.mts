export function generateEntityFactoryCode(
	factoryName: string,
	entityName: string,
	importPath: string,
	majorVersion: number,
	revision: number
) {
	return `
import type {Definition} from "${importPath}"
import {createEntity} from "#~export/createEntity.ts"

export function ${factoryName}(data: Definition) {
	return createEntity("${entityName}", ${majorVersion}, ${revision}, data)
}
`.slice(1)
}
