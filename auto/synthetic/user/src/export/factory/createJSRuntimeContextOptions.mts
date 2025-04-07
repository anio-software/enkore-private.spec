import type {Definition} from "#~src/entities/EnkoreJSRuntimeContextOptions/v0/rev0.d.mts"
import {createEntity} from "#~src/export/createEntity.mts"

export function createJSRuntimeContextOptions(data: Definition) {
	return createEntity("EnkoreJSRuntimeContextOptions", 0, 0, data)
}
