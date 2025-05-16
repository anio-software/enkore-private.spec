import type {IDs} from "#~src/apis/IDs.mts"

//
// defines a versioned API type
//

// NB: this data type SHOULD NEVER change in the lifecycle
// of the "enkore" project
export type DefineAPI<
	ID extends IDs,
	MajorVersion extends number,
	Revision extends number,
	T extends object | unknown
> = {
	readonly apiID: ID
	readonly apiMajorVersion: MajorVersion
	readonly apiRevision: Revision
} & T
