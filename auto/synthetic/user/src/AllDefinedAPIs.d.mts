import type {DefineAPI} from "#~src/DefineAPI.d.mts"

import type {Definition as FourtuneCoreAPI_V0_Rev0Definition} from "#~src/apis/FourtuneCoreAPI/v0/rev0.d.mts"
import type {Definition as FourtuneNodeAPI_V0_Rev0Definition} from "#~src/apis/FourtuneNodeAPI/v0/rev0.d.mts"
import type {Definition as FourtuneRealmIntegrationAPI_V0_Rev0Definition} from "#~src/apis/FourtuneRealmIntegrationAPI/v0/rev0.d.mts"
import type {Definition as FourtuneRealmJSRuntimeAssetsAPI_V0_Rev0Definition} from "#~src/apis/FourtuneRealmJSRuntimeAssetsAPI/v0/rev0.d.mts"
import type {Definition as FourtuneRealmJSRuntimeProjectAPI_V0_Rev0Definition} from "#~src/apis/FourtuneRealmJSRuntimeProjectAPI/v0/rev0.d.mts"
import type {Definition as FourtuneSessionAPI_V0_Rev0Definition} from "#~src/apis/FourtuneSessionAPI/v0/rev0.d.mts"

export type FourtuneCoreAPI_V0_Rev0 = DefineAPI<"FourtuneCoreAPI", 0, 0, FourtuneCoreAPI_V0_Rev0Definition>
export type FourtuneNodeAPI_V0_Rev0 = DefineAPI<"FourtuneNodeAPI", 0, 0, FourtuneNodeAPI_V0_Rev0Definition>
export type FourtuneRealmIntegrationAPI_V0_Rev0 = DefineAPI<"FourtuneRealmIntegrationAPI", 0, 0, FourtuneRealmIntegrationAPI_V0_Rev0Definition>
export type FourtuneRealmJSRuntimeAssetsAPI_V0_Rev0 = DefineAPI<"FourtuneRealmJSRuntimeAssetsAPI", 0, 0, FourtuneRealmJSRuntimeAssetsAPI_V0_Rev0Definition>
export type FourtuneRealmJSRuntimeProjectAPI_V0_Rev0 = DefineAPI<"FourtuneRealmJSRuntimeProjectAPI", 0, 0, FourtuneRealmJSRuntimeProjectAPI_V0_Rev0Definition>
export type FourtuneSessionAPI_V0_Rev0 = DefineAPI<"FourtuneSessionAPI", 0, 0, FourtuneSessionAPI_V0_Rev0Definition>

export type FourtuneCoreAPI_V0 = FourtuneCoreAPI_V0_Rev0
export type FourtuneNodeAPI_V0 = FourtuneNodeAPI_V0_Rev0
export type FourtuneRealmIntegrationAPI_V0 = FourtuneRealmIntegrationAPI_V0_Rev0
export type FourtuneRealmJSRuntimeAssetsAPI_V0 = FourtuneRealmJSRuntimeAssetsAPI_V0_Rev0
export type FourtuneRealmJSRuntimeProjectAPI_V0 = FourtuneRealmJSRuntimeProjectAPI_V0_Rev0
export type FourtuneSessionAPI_V0 = FourtuneSessionAPI_V0_Rev0

export type FourtuneCoreAPI = FourtuneCoreAPI_V0
export type FourtuneNodeAPI = FourtuneNodeAPI_V0
export type FourtuneRealmIntegrationAPI = FourtuneRealmIntegrationAPI_V0
export type FourtuneRealmJSRuntimeAssetsAPI = FourtuneRealmJSRuntimeAssetsAPI_V0
export type FourtuneRealmJSRuntimeProjectAPI = FourtuneRealmJSRuntimeProjectAPI_V0
export type FourtuneSessionAPI = FourtuneSessionAPI_V0

export type AllDefinedAPIs = FourtuneCoreAPI | FourtuneNodeAPI | FourtuneRealmIntegrationAPI | FourtuneRealmJSRuntimeAssetsAPI | FourtuneRealmJSRuntimeProjectAPI | FourtuneSessionAPI
