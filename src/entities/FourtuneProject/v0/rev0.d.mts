import type {EntityOfKind} from "#~src/export/EntityOfKind.d.mts"
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

export type Definition = EventEmitter<Events> & {
	readonly root: string
	readonly config: EntityOfKind<"FourtuneConfig">

	readonly init: () => Promise<{
		session: Readonly<
			EntityOfKind<"FourtuneSession">
		>,
		compile: Compile
	}>
}
