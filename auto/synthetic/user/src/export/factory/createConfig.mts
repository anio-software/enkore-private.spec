import type {Definition} from "#~src/entities/EnkoreConfig/v0/rev0.d.mts"
import {createEntity} from "#~src/export/createEntity.mts"

export function createConfig(data: Definition) {
	return createEntity("EnkoreConfig", 0, 0, data)
}
