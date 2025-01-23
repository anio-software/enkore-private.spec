import type {EntityOfKind} from "#~src/EntityOfKind.d.mts"
import type {DefineEvent, EventEmitter} from "@aniojs/event-emitter"

type WarningEvent = DefineEvent<"warning", {
	id: string|undefined
	message: string
}>

type ErrorEvent = DefineEvent<"error", {
	id: string|undefined
	message: string
}>

type Events = [WarningEvent, ErrorEvent]

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
	readonly config: EntityOfKind<false, "FourtuneConfig">

	readonly init: () => Promise<{
		session: Readonly<
			EntityOfKind<false, "FourtuneSession">
		>,
		compile: Compile
	}>
}
