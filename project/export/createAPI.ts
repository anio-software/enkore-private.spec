import type {AllAPIs} from "#~src/maps/AllAPIs.ts"
import type {IDs} from "#~src/apis/IDs.ts"
import type {AllDefinedMajorVersions} from "#~src/apis/AllDefinedMajorVersions.ts"
import type {AllDefinedRevisions} from "#~src/apis/AllDefinedRevisions.ts"
import type {UnknownAPI} from "./UnknownAPI.ts"
import type {RawType} from "./RawType.ts"

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
