import type {Definition} from "#~src/entities/EnkoreTargetJSNodeOptions/v0/rev0.d.mts"
import {createEntity} from "#~src/export/createEntity.mts"

export function createTargetJSNodeOptions(data: Definition) {
	return createEntity("EnkoreTargetJSNodeOptions", 0, 0, data)
}
