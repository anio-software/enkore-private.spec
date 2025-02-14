import type {
	EnkoreSessionAPI,
	EnkoreNodeAPIOptions,
	EnkoreMessage
} from "#~src/export/__star_export.mts"
import type {DefineEvent, EventEmitter} from "@aniojs/event-emitter"

type MessageEvent = DefineEvent<"message", {
	message: string
}>

type WarningEvent = DefineEvent<"warning", {
	id: string|undefined
	message: string
}>

type ErrorEvent = DefineEvent<"error", {
	id: string|undefined
	message: string
}>

type Events = [MessageEvent, WarningEvent, ErrorEvent]

type Product = {
	name: string
	build: () => Promise<{
		messages: EnkoreMessage[]
	}>
}

type Compile = () => Promise<{
	messages: EnkoreMessage[]
	products: Product[]
}>

export type Definition = {
	enkore: (
		projectRoot: string,
		options: EnkoreNodeAPIOptions
	) => Promise<EventEmitter<Events> & {
		readonly session: EnkoreSessionAPI,
		readonly init: () => Promise<{
			compile: Compile
		}>
	}>
}
