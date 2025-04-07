import type {Definition} from "#~src/entities/EnkoreTargetCOptions/v0/rev0.d.mts"
import {createEntity} from "#~src/export/createEntity.mts"

export function createTargetCOptions(data: Definition) {
	return createEntity("EnkoreTargetCOptions", 0, 0, data)
}
