import type {Definition} from "#~src/entities/EnkoreTargetJSWebOptions/v0/rev0.d.mts"
import {createEntity} from "#~src/export/createEntity.mts"

export function createTargetJSWebOptions(data: Definition) {
	return createEntity("EnkoreTargetJSWebOptions", 0, 0, data)
}
