import type {
	EnkoreConfig,
	EnkoreSessionAPI,
	EnkoreNodeAPIOptions
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

type Message = {
	severity: "warn" | "error"
	id: string|undefined
	message: string
}

type Product = {
	name: string
	build: () => Promise<{
		messages: Message[]
	}>
}

type Compile = () => Promise<{
	messages: Message[]
	products: Product[]
}>

export type Definition = {
	enkore: (
		projectRoot: string,
		options: EnkoreNodeAPIOptions
	) => Promise<EventEmitter<Events> & {
		readonly root: string
		readonly config: EnkoreConfig

		readonly init: () => Promise<{
			session: Readonly<EnkoreSessionAPI>,
			compile: Compile
		}>
	}>
}
