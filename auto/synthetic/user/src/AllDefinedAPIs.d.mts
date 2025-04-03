import type {DefineAPI} from "#~src/DefineAPI.d.mts"

import type {Definition as EnkoreCoreAPI_V0_Rev0Definition} from "#~src/apis/EnkoreCoreAPI/v0/rev0.d.mts"
import type {Definition as EnkoreJSRuntimeAPI_V0_Rev0Definition} from "#~src/apis/EnkoreJSRuntimeAPI/v0/rev0.d.mts"
import type {Definition as EnkoreJSRuntimeAssetsAPI_V0_Rev0Definition} from "#~src/apis/EnkoreJSRuntimeAssetsAPI/v0/rev0.d.mts"
import type {Definition as EnkoreJSRuntimeProjectAPI_V0_Rev0Definition} from "#~src/apis/EnkoreJSRuntimeProjectAPI/v0/rev0.d.mts"
import type {Definition as EnkoreNodeAPI_V0_Rev0Definition} from "#~src/apis/EnkoreNodeAPI/v0/rev0.d.mts"
import type {Definition as EnkoreSessionAPI_V0_Rev0Definition} from "#~src/apis/EnkoreSessionAPI/v0/rev0.d.mts"
import type {Definition as EnkoreTargetIntegrationAPI_V0_Rev0Definition} from "#~src/apis/EnkoreTargetIntegrationAPI/v0/rev0.d.mts"
import type {Definition as EnkoreTargetJSAutogenerateAPI_V0_Rev0Definition} from "#~src/apis/EnkoreTargetJSAutogenerateAPI/v0/rev0.d.mts"

export type EnkoreCoreAPI_V0_Rev0 = DefineAPI<"EnkoreCoreAPI", 0, 0, EnkoreCoreAPI_V0_Rev0Definition>
export type EnkoreJSRuntimeAPI_V0_Rev0 = DefineAPI<"EnkoreJSRuntimeAPI", 0, 0, EnkoreJSRuntimeAPI_V0_Rev0Definition>
export type EnkoreJSRuntimeAssetsAPI_V0_Rev0 = DefineAPI<"EnkoreJSRuntimeAssetsAPI", 0, 0, EnkoreJSRuntimeAssetsAPI_V0_Rev0Definition>
export type EnkoreJSRuntimeProjectAPI_V0_Rev0 = DefineAPI<"EnkoreJSRuntimeProjectAPI", 0, 0, EnkoreJSRuntimeProjectAPI_V0_Rev0Definition>
export type EnkoreNodeAPI_V0_Rev0 = DefineAPI<"EnkoreNodeAPI", 0, 0, EnkoreNodeAPI_V0_Rev0Definition>
export type EnkoreSessionAPI_V0_Rev0 = DefineAPI<"EnkoreSessionAPI", 0, 0, EnkoreSessionAPI_V0_Rev0Definition>
export type EnkoreTargetIntegrationAPI_V0_Rev0 = DefineAPI<"EnkoreTargetIntegrationAPI", 0, 0, EnkoreTargetIntegrationAPI_V0_Rev0Definition>
export type EnkoreTargetJSAutogenerateAPI_V0_Rev0 = DefineAPI<"EnkoreTargetJSAutogenerateAPI", 0, 0, EnkoreTargetJSAutogenerateAPI_V0_Rev0Definition>

export type EnkoreCoreAPI_V0 = EnkoreCoreAPI_V0_Rev0
export type EnkoreJSRuntimeAPI_V0 = EnkoreJSRuntimeAPI_V0_Rev0
export type EnkoreJSRuntimeAssetsAPI_V0 = EnkoreJSRuntimeAssetsAPI_V0_Rev0
export type EnkoreJSRuntimeProjectAPI_V0 = EnkoreJSRuntimeProjectAPI_V0_Rev0
export type EnkoreNodeAPI_V0 = EnkoreNodeAPI_V0_Rev0
export type EnkoreSessionAPI_V0 = EnkoreSessionAPI_V0_Rev0
export type EnkoreTargetIntegrationAPI_V0 = EnkoreTargetIntegrationAPI_V0_Rev0
export type EnkoreTargetJSAutogenerateAPI_V0 = EnkoreTargetJSAutogenerateAPI_V0_Rev0

export type EnkoreCoreAPI = EnkoreCoreAPI_V0
export type EnkoreJSRuntimeAPI = EnkoreJSRuntimeAPI_V0
export type EnkoreJSRuntimeAssetsAPI = EnkoreJSRuntimeAssetsAPI_V0
export type EnkoreJSRuntimeProjectAPI = EnkoreJSRuntimeProjectAPI_V0
export type EnkoreNodeAPI = EnkoreNodeAPI_V0
export type EnkoreSessionAPI = EnkoreSessionAPI_V0
export type EnkoreTargetIntegrationAPI = EnkoreTargetIntegrationAPI_V0
export type EnkoreTargetJSAutogenerateAPI = EnkoreTargetJSAutogenerateAPI_V0

export type AllDefinedAPIs = EnkoreCoreAPI | EnkoreJSRuntimeAPI | EnkoreJSRuntimeAssetsAPI | EnkoreJSRuntimeProjectAPI | EnkoreNodeAPI | EnkoreSessionAPI | EnkoreTargetIntegrationAPI | EnkoreTargetJSAutogenerateAPI
