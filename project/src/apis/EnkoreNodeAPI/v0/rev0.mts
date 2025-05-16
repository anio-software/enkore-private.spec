import type {
	EnkoreSessionAPI,
	EnkoreNodeAPIOptions
} from "#~export/__aggregatedExports.mts"
import type {DefineEvent, EventEmitter} from "@aniojs/event-emitter"
import type {NodeAPIMessage} from "@enkore/primitives"

type MessageEvent = DefineEvent<"message", NodeAPIMessage>

type Events = [MessageEvent]

type PublishProducts = (
	// false indicates "skip" publishing
	productNames: string[] | null | false
) => Promise<{
	messages: NodeAPIMessage[]
}>

type TestProducts = (
	// false indicates "skip" testing
	productNames: string[] | null | false
) => Promise<{
	messages: NodeAPIMessage[]
	publishProducts: PublishProducts
}>

// -- build steps ---
type BuildProducts = (
	names: string[] | null
) => Promise<{
	messages: NodeAPIMessage[]
	testProducts: TestProducts
}>

type Compile = () => Promise<{
	messages: NodeAPIMessage[],
	buildProducts: BuildProducts
}>

type Lint = () => Promise<{
	messages: NodeAPIMessage[],
	compile: Compile
}>

type Init = () => Promise<{
	messages: NodeAPIMessage[],
	lint: Lint
	productNames: string[]
}>

type Preprocess = () => Promise<{
	messages: NodeAPIMessage[],
	init: Init
}>

type Autogenerate = () => Promise<{
	messages: NodeAPIMessage[],
	preprocess: Preprocess
}>

type Clean = () => Promise<{
	messages: NodeAPIMessage[],
	autogenerate: Autogenerate
}>

type PreInit = () => Promise<{
	clean: Clean,
	messages: NodeAPIMessage[]
}>
// -- build steps ---

type ExtendedNodeAPIMessage = NodeAPIMessage & {
	step: string
}

type Build = () => Promise<{
	messages: ExtendedNodeAPIMessage[]
}>

type BuildAndTest = () => Promise<{
	messages: ExtendedNodeAPIMessage[]
}>

type BuildAndPublish = (skipTests?: boolean) => Promise<{
	messages: ExtendedNodeAPIMessage[]
}>

export type Definition = {
	enkore: (
		projectRoot: string,
		options: EnkoreNodeAPIOptions
	) => Promise<{
		session: EnkoreSessionAPI,
		project: EventEmitter<Events> & {
			preInit: PreInit
			build: Build
			buildAndTest: BuildAndTest
			buildAndPublish: BuildAndPublish
		}
	}>
}
