import type {Kinds} from "./Kinds.d.mts"

//
// defines a versioned entity type
//

// NB: this data type SHOULD NEVER change in the lifecycle
// of the "fourtune" project
export type EntityType<
	Kind extends Kinds,
	MajorVersion extends number,
	Revision extends number,
	T extends {} | unknown
> = {
	readonly _fourtuneEntityDescriptor: {
		readonly kind: Kind
		readonly majorVersion: MajorVersion
		readonly revision: Revision

		//
		// meta data about the producer of the object
		//
		readonly producedBy: ({
			readonly package: string
			readonly majorVersion: number
			readonly revision: number
		}) | null

		//
		// a place to store additional data
		//
		readonly extraData: Record<string, unknown>

		readonly object: T
	}
} & T
