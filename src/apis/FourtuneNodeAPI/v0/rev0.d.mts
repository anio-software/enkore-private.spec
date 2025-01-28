import type {
	FourtuneConfig,
	FourtuneSession,
	FourtuneNodeAPIOptions
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
	fourtune: (
		projectRoot: string,
		options?: FourtuneNodeAPIOptions
	) => Promise<EventEmitter<Events> & {
		readonly root: string
		readonly config: FourtuneConfig

		readonly init: () => Promise<{
			session: Readonly<FourtuneSession>,
			compile: Compile
		}>
	}>
}
