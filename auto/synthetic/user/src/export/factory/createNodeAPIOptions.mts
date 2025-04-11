import type {Definition} from "#~src/entities/EnkoreNodeAPIOptions/v0/rev0.d.mts"
import {createEntity} from "#~src/export/createEntity.mts"

export function createNodeAPIOptions(data: Definition) {
	return createEntity("EnkoreNodeAPIOptions", 0, 0, data)
}
