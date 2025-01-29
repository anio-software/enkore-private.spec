import type {API} from "#~src/export/API.d.mts"
import type {IDs} from "#~src/apis/IDs.d.mts"
import type {AllDefinedMajorVersions} from "#~src/apis/AllDefinedMajorVersions.d.mts"
import type {AllDefinedRevisions} from "#~src/apis/AllDefinedRevisions.d.mts"
import type {UnknownAPI} from "./UnknownAPI.d.mts"

export async function importAPI<
	ID extends IDs,
	MajorVersion extends AllDefinedMajorVersions,
	Revision extends AllDefinedRevisions
>(
	path: string,
	apiID: ID,
	majorVersion?: MajorVersion,
	revision?: Revision
) : Promise<API<ID, MajorVersion, Revision>> {
	const obj : UnknownAPI = await import(path)

	if (obj.apiID !== apiID) {
		throw new Error(
			`importAPI: api ID mismatch, expected "${apiID}" got "${obj.apiID}".`
		)
	}

	if (majorVersion !== undefined) {
		if (obj.apiMajorVersion !== majorVersion) {
			throw new Error(
				`importAPI: api major version mismatch, expected "${majorVersion}" got "${obj.apiMajorVersion}".`
			)
		}
	}

	if (revision !== undefined) {
		if (obj.apiRevision !== revision) {
			throw new Error(
				`importAPI: api revision mismatch, expected "${revision}" got "${obj.apiRevision}".`
			)
		}
	}

	return obj as API<ID, MajorVersion, Revision>
}
