import type {IDs} from "#~src/apis/IDs.d.mts"

import type {AllDefinedMajorVersions} from "#~src/apis/AllDefinedMajorVersions.d.mts"
import type {AllDefinedRevisions} from "#~src/apis/AllDefinedRevisions.d.mts"
import type {APIsByIDAndMajorVersion} from "#~src/maps/APIsByIDAndMajorVersion.d.mts"
import type {APIsByID} from "#~src/maps/APIsByID.d.mts"
import type {AllAPIs} from "#~src/maps/AllAPIs.d.mts"

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
