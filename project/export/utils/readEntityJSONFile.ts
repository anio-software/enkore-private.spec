import type {Entity} from "#~export/Entity.ts"
import type {Kinds} from "#~src/entities/Kinds.ts"
import type {AllDefinedMajorVersions} from "#~src/entities/AllDefinedMajorVersions.ts"
import type {AllDefinedRevisions} from "#~src/entities/AllDefinedRevisions.ts"
import type {UnknownEntity} from "../UnknownEntity.ts"
import type {JSONCompatibleType} from "../JSONCompatibleType.ts"
import {readFileJSON} from "@anio-software/pkg.node-fs"

export async function readEntityJSONFile<
	Kind extends Kinds,
	MajorVersion extends AllDefinedMajorVersions,
	Revision extends AllDefinedRevisions
>(
	path: string,
	entityKind: Kind,
	majorVersion?: MajorVersion,
	revision?: Revision
) : Promise<JSONCompatibleType<Entity<Kind, MajorVersion, Revision>>> {
	const obj : UnknownEntity = (await readFileJSON(path)) as UnknownEntity

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
