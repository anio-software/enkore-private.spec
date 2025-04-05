export type Definition = {
	getAssetAsString: (asset: string) => string
	getAssetAsUint8Array: (asset: string) => Uint8Array
	getAssetAsURL: (asset: string) => string
}
