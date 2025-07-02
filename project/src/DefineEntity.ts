import type {Kinds} from "#~src/entities/Kinds.ts"

//
// defines a versioned entity type
//

// NB: this data type SHOULD NEVER change in the lifecycle
// of the "enkore" project
export type DefineEntity<
	Kind extends Kinds,
	MajorVersion extends number,
	Revision extends number,
	T extends object | unknown
> = {
	readonly entityKind: Kind
	readonly entityMajorVersion: MajorVersion
	readonly entityRevision: Revision
	readonly entityCreatedBy: ({
		readonly package: string
		readonly majorVersion: number
		readonly revision: number
	}) | null
} & T
