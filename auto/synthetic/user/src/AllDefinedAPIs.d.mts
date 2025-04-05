import type {DefineAPI} from "#~src/DefineAPI.d.mts"

import type {Definition as EnkoreCoreAPI_V0_Rev0Definition} from "#~src/apis/EnkoreCoreAPI/v0/rev0.d.mts"
import type {Definition as EnkoreJSRuntimeAPI_V0_Rev0Definition} from "#~src/apis/EnkoreJSRuntimeAPI/v0/rev0.d.mts"
import type {Definition as EnkoreJSRuntimeAutogenerateAPI_V0_Rev0Definition} from "#~src/apis/EnkoreJSRuntimeAutogenerateAPI/v0/rev0.d.mts"
import type {Definition as EnkoreNodeAPI_V0_Rev0Definition} from "#~src/apis/EnkoreNodeAPI/v0/rev0.d.mts"
import type {Definition as EnkoreSessionAPI_V0_Rev0Definition} from "#~src/apis/EnkoreSessionAPI/v0/rev0.d.mts"
import type {Definition as EnkoreTargetIntegrationAPI_V0_Rev0Definition} from "#~src/apis/EnkoreTargetIntegrationAPI/v0/rev0.d.mts"

export type EnkoreCoreAPI_V0_Rev0 = DefineAPI<"EnkoreCoreAPI", 0, 0, EnkoreCoreAPI_V0_Rev0Definition>
export type EnkoreJSRuntimeAPI_V0_Rev0 = DefineAPI<"EnkoreJSRuntimeAPI", 0, 0, EnkoreJSRuntimeAPI_V0_Rev0Definition>
export type EnkoreJSRuntimeAutogenerateAPI_V0_Rev0 = DefineAPI<"EnkoreJSRuntimeAutogenerateAPI", 0, 0, EnkoreJSRuntimeAutogenerateAPI_V0_Rev0Definition>
export type EnkoreNodeAPI_V0_Rev0 = DefineAPI<"EnkoreNodeAPI", 0, 0, EnkoreNodeAPI_V0_Rev0Definition>
export type EnkoreSessionAPI_V0_Rev0 = DefineAPI<"EnkoreSessionAPI", 0, 0, EnkoreSessionAPI_V0_Rev0Definition>
export type EnkoreTargetIntegrationAPI_V0_Rev0 = DefineAPI<"EnkoreTargetIntegrationAPI", 0, 0, EnkoreTargetIntegrationAPI_V0_Rev0Definition>

export type EnkoreCoreAPI_V0 = EnkoreCoreAPI_V0_Rev0
export type EnkoreJSRuntimeAPI_V0 = EnkoreJSRuntimeAPI_V0_Rev0
export type EnkoreJSRuntimeAutogenerateAPI_V0 = EnkoreJSRuntimeAutogenerateAPI_V0_Rev0
export type EnkoreNodeAPI_V0 = EnkoreNodeAPI_V0_Rev0
export type EnkoreSessionAPI_V0 = EnkoreSessionAPI_V0_Rev0
export type EnkoreTargetIntegrationAPI_V0 = EnkoreTargetIntegrationAPI_V0_Rev0

export type EnkoreCoreAPI = EnkoreCoreAPI_V0
export type EnkoreJSRuntimeAPI = EnkoreJSRuntimeAPI_V0
export type EnkoreJSRuntimeAutogenerateAPI = EnkoreJSRuntimeAutogenerateAPI_V0
export type EnkoreNodeAPI = EnkoreNodeAPI_V0
export type EnkoreSessionAPI = EnkoreSessionAPI_V0
export type EnkoreTargetIntegrationAPI = EnkoreTargetIntegrationAPI_V0

export type AllDefinedAPIs = EnkoreCoreAPI | EnkoreJSRuntimeAPI | EnkoreJSRuntimeAutogenerateAPI | EnkoreNodeAPI | EnkoreSessionAPI | EnkoreTargetIntegrationAPI
