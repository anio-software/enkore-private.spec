import type {
	EnkoreSessionAPI,
	EnkoreNodeAPIOptions,
	EnkoreNodeAPIMessage
} from "#~src/export/__star_export.mts"
import type {DefineEvent, EventEmitter} from "@aniojs/event-emitter"

type MessageEvent = DefineEvent<"message", {
	message: EnkoreNodeAPIMessage
}>

type Events = [MessageEvent]

type BuildProducts = (
	names: string[] | null
) => Promise<{
	messages: EnkoreNodeAPIMessage[]
}>

type Compile = () => Promise<{
	messages: EnkoreNodeAPIMessage[],
	buildProducts: BuildProducts
}>

type Lint = () => Promise<{
	messages: EnkoreNodeAPIMessage[],
	compile: Compile
}>

type Preprocess = () => Promise<{
	messages: EnkoreNodeAPIMessage[],
	lint: Lint
}>

type Autogenerate = () => Promise<{
	messages: EnkoreNodeAPIMessage[],
	preprocess: Preprocess
}>

type Clean = () => Promise<{
	messages: EnkoreNodeAPIMessage[],
	autogenerate: Autogenerate
}>

type Init = () => Promise<{
	clean: Clean,
	productNames: string[]
}>

type Build = () => Promise<{
	messages: EnkoreNodeAPIMessage[]
}>

export type Definition = {
	enkore: (
		projectRoot: string,
		options: EnkoreNodeAPIOptions
	) => Promise<{
		session: EnkoreSessionAPI,
		project: EventEmitter<Events> & {
			init: Init
			build: Build
		}
	}>
}
