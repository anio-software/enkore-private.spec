import type {IDs} from "#~src/apis/IDs.mts"
import type {APIsByID} from "#~src/maps/APIsByID.mts"
import type {UnknownAPI} from "./UnknownAPI.mts"

export function isAPI<
	ID extends IDs
>(
	objToTest: unknown,
	id: ID
) : objToTest is APIsByID[ID] {
	const entity = objToTest as UnknownAPI

	return entity.apiID === id
}
