import type {IDs} from "#~src/apis/IDs.ts"
import type {APIsByID} from "#~src/maps/APIsByID.ts"
import type {UnknownAPI} from "./UnknownAPI.ts"

export function isAPI<
	ID extends IDs
>(
	objToTest: unknown,
	id: ID
) : objToTest is APIsByID[ID] {
	const entity = objToTest as UnknownAPI

	return entity.apiID === id
}
