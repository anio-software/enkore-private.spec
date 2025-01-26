import type {UnknownEntity} from "./UnknownEntity.d.mts"

export type StripEntityProperties<T extends UnknownEntity> = Omit<
	T, keyof UnknownEntity
>
