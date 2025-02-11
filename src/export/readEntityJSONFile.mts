import type {Entity} from "#~src/export/Entity.d.mts"
import type {Kinds} from "#~src/entities/Kinds.d.mts"
import type {AllDefinedMajorVersions} from "#~src/entities/AllDefinedMajorVersions.d.mts"
import type {AllDefinedRevisions} from "#~src/entities/AllDefinedRevisions.d.mts"
import type {UnknownEntity} from "./UnknownEntity.d.mts"
import type {JSONCompatibleType} from "./JSONCompatibleType.d.mts"
import type {RawType} from "./RawType.d.mts"
import {readFileJSON} from "@aniojs/node-fs-file"
import {createEntity} from "./createEntity.mts"

export async function readEntityJSONFile<
	Kind extends Kinds,
	MajorVersion extends AllDefinedMajorVersions,
	Revision extends AllDefinedRevisions
>(
	path: string,
	entityKind: Kind,
	majorVersion?: MajorVersion,
	revision?: Revision,
	defaults?: RawType<Entity<Kind, MajorVersion, Revision>>
) : Promise<JSONCompatibleType<Entity<Kind, MajorVersion, Revision>>> {
	let obj : UnknownEntity = {} as UnknownEntity

	if (defaults === undefined) {
		obj = await readFileJSON(path) as UnknownEntity
	} else {
		try {
			obj = await readFileJSON(path) as UnknownEntity
		} catch {
			obj = createEntity(
				entityKind, majorVersion!, revision!, defaults
			)

			//
			// make sure defaults are restricted to JSON compatible
			// types only.
			//
			obj = JSON.parse(JSON.stringify(obj))
		}
	}

	if (obj.entityKind !== entityKind) {
		throw new Error(
			`readEntityJSONFile: entity mismatch, expected "${entityKind}" got "${obj.entityKind}".`
		)
	}

	if (majorVersion !== undefined) {
		if (obj.entityMajorVersion !== majorVersion) {
			throw new Error(
				`readEntityJSONFile: entity major version mismatch, expected "${majorVersion}" got "${obj.entityMajorVersion}".`
			)
		}
	}

	if (revision !== undefined) {
		if (obj.entityRevision !== revision) {
			throw new Error(
				`readEntityJSONFile: entity revision mismatch, expected "${revision}" got "${obj.entityRevision}".`
			)
		}
	}

	return obj as JSONCompatibleType<Entity<Kind, MajorVersion, Revision>>
}
