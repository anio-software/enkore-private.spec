import type {IDs} from "#~src/apis/IDs.d.mts"
import type {APIsByID} from "#~src/maps/APIsByID.d.mts"
import type {UnknownAPI} from "./UnknownAPI.d.mts"

export function isAPI<
	ID extends IDs
>(
	objToTest: unknown,
	id: ID
) : objToTest is APIsByID[ID] {
	const entity = objToTest as UnknownAPI

	return entity.apiID === id
}
