import type {AllAPIs} from "#~src/maps/AllAPIs.d.mts"
import type {IDs} from "#~src/apis/IDs.d.mts"
import type {AllDefinedMajorVersions} from "#~src/apis/AllDefinedMajorVersions.d.mts"
import type {AllDefinedRevisions} from "#~src/apis/AllDefinedRevisions.d.mts"
import type {UnknownAPI} from "./UnknownAPI.d.mts"
import type {RawType} from "./RawType.d.mts"

export function createAPI<
	ID extends IDs,
	MajorVersion extends AllDefinedMajorVersions,
	Revision extends AllDefinedRevisions
>(
	id: ID,
	majorVersion: MajorVersion,
	revision: Revision,
	api: RawType<AllAPIs[ID][MajorVersion][Revision]>
) : AllAPIs[ID][MajorVersion][Revision] {
	const header : UnknownAPI = {
		apiID: id,
		apiMajorVersion: majorVersion,
		apiRevision: revision
	}

	return {
		...header,
		...api
	} as AllAPIs[ID][MajorVersion][Revision]
}
