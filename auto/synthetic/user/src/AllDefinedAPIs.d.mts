import type {DefineAPI} from "#~src/DefineAPI.d.mts"

import type {Definition as EnkoreCoreAPI_V0_Rev0Definition} from "#~src/apis/EnkoreCoreAPI/v0/rev0.d.mts"
import type {Definition as EnkoreNodeAPI_V0_Rev0Definition} from "#~src/apis/EnkoreNodeAPI/v0/rev0.d.mts"
import type {Definition as EnkoreSessionAPI_V0_Rev0Definition} from "#~src/apis/EnkoreSessionAPI/v0/rev0.d.mts"
import type {Definition as EnkoreTargetIntegrationAPI_V0_Rev0Definition} from "#~src/apis/EnkoreTargetIntegrationAPI/v0/rev0.d.mts"
import type {Definition as EnkoreTargetJSRuntimeAPI_V0_Rev0Definition} from "#~src/apis/EnkoreTargetJSRuntimeAPI/v0/rev0.d.mts"
import type {Definition as EnkoreTargetJSRuntimeAutogenerateAPI_V0_Rev0Definition} from "#~src/apis/EnkoreTargetJSRuntimeAutogenerateAPI/v0/rev0.d.mts"

export type EnkoreCoreAPI_V0_Rev0 = DefineAPI<"EnkoreCoreAPI", 0, 0, EnkoreCoreAPI_V0_Rev0Definition>
export type EnkoreNodeAPI_V0_Rev0 = DefineAPI<"EnkoreNodeAPI", 0, 0, EnkoreNodeAPI_V0_Rev0Definition>
export type EnkoreSessionAPI_V0_Rev0 = DefineAPI<"EnkoreSessionAPI", 0, 0, EnkoreSessionAPI_V0_Rev0Definition>
export type EnkoreTargetIntegrationAPI_V0_Rev0 = DefineAPI<"EnkoreTargetIntegrationAPI", 0, 0, EnkoreTargetIntegrationAPI_V0_Rev0Definition>
export type EnkoreTargetJSRuntimeAPI_V0_Rev0 = DefineAPI<"EnkoreTargetJSRuntimeAPI", 0, 0, EnkoreTargetJSRuntimeAPI_V0_Rev0Definition>
export type EnkoreTargetJSRuntimeAutogenerateAPI_V0_Rev0 = DefineAPI<"EnkoreTargetJSRuntimeAutogenerateAPI", 0, 0, EnkoreTargetJSRuntimeAutogenerateAPI_V0_Rev0Definition>

export type EnkoreCoreAPI_V0 = EnkoreCoreAPI_V0_Rev0
export type EnkoreNodeAPI_V0 = EnkoreNodeAPI_V0_Rev0
export type EnkoreSessionAPI_V0 = EnkoreSessionAPI_V0_Rev0
export type EnkoreTargetIntegrationAPI_V0 = EnkoreTargetIntegrationAPI_V0_Rev0
export type EnkoreTargetJSRuntimeAPI_V0 = EnkoreTargetJSRuntimeAPI_V0_Rev0
export type EnkoreTargetJSRuntimeAutogenerateAPI_V0 = EnkoreTargetJSRuntimeAutogenerateAPI_V0_Rev0

export type EnkoreCoreAPI = EnkoreCoreAPI_V0
export type EnkoreNodeAPI = EnkoreNodeAPI_V0
export type EnkoreSessionAPI = EnkoreSessionAPI_V0
export type EnkoreTargetIntegrationAPI = EnkoreTargetIntegrationAPI_V0
export type EnkoreTargetJSRuntimeAPI = EnkoreTargetJSRuntimeAPI_V0
export type EnkoreTargetJSRuntimeAutogenerateAPI = EnkoreTargetJSRuntimeAutogenerateAPI_V0

export type AllDefinedAPIs = EnkoreCoreAPI | EnkoreNodeAPI | EnkoreSessionAPI | EnkoreTargetIntegrationAPI | EnkoreTargetJSRuntimeAPI | EnkoreTargetJSRuntimeAutogenerateAPI
