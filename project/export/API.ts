import type {IDs} from "#~src/apis/IDs.ts"

import type {AllDefinedMajorVersions} from "#~src/apis/AllDefinedMajorVersions.ts"
import type {AllDefinedRevisions} from "#~src/apis/AllDefinedRevisions.ts"
import type {APIsByIDAndMajorVersion} from "#~src/maps/APIsByIDAndMajorVersion.ts"
import type {APIsByID} from "#~src/maps/APIsByID.ts"
import type {AllAPIs} from "#~src/maps/AllAPIs.ts"

type MajorVersions = AllDefinedMajorVersions | void | undefined
type Revisions = AllDefinedRevisions | void | undefined

export type API<
	ID extends IDs,
	MajorVersion extends MajorVersions = void,
	Revision extends Revisions = void
> = 
	MajorVersion extends AllDefinedMajorVersions ? 
		Revision extends AllDefinedRevisions ?
			AllAPIs[ID][MajorVersion][Revision] :
			APIsByIDAndMajorVersion[ID][MajorVersion] :
			APIsByID[ID]
