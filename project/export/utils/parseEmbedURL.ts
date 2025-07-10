import {
	type JSEmbedProtocol,
	getJSEmbedProtocols
} from "@anio-software/enkore-private.primitives"

const validProtocols = getJSEmbedProtocols()

export function parseEmbedURL(url: string): {
	protocol: JSEmbedProtocol
	path: string
} {
	const tmp = url.split("://")

	if (tmp.length !== 2) {
		throw new Error(`Malformed embed url '${url}'.`)
	}

	const [protocol, path] = tmp

	if (!validProtocols.includes(protocol as any)) {
		throw new Error(`Unknown embed protocol '${protocol}' (from url '${url}').`)
	}

	return {
		protocol: protocol as JSEmbedProtocol,
		path
	}
}
