export type Definition = {
	getAsset: (asset: string) => string | Uint8Array
	getAssetAsURL: (asset: string) => string
}
