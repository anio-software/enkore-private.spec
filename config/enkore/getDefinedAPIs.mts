import {scandir} from "@aniojs/node-fs"
import {fileURLToPath} from "node:url"
import path from "node:path"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

type DefinedAPI = Map<number, {
	importPath: string
	importAliasName: string
	revision: number
	apiType: (definitionType: string) => string
}[]>

export type DefinedAPIs = Map<string, DefinedAPI>

export async function getDefinedAPIs(): Promise<DefinedAPIs> {
	const map: DefinedAPIs = new Map()
	const entries = await scandir(
		path.join(__dirname, "..", "..", "project", "src", "apis"), {
			sorted: true
		}
	)

	for (const entry of entries) {
		if (entry.type !== "regularFile") continue
		if (entry.parents.length !== 2) continue
		if (!entry.name.startsWith("rev")) continue

		const apiID = entry.parents[0]
		const apiMajorVersion = parseInt(entry.parents[1].slice(1), 10)
		const apiRevision = parseInt(entry.name.slice(3), 10)

		if (!apiID.endsWith("API")) continue

		if (!map.has(apiID)) {
			map.set(apiID, new Map())
		}

		const apiMap = map.get(apiID)!

		if (!apiMap.has(apiMajorVersion)) {
			apiMap.set(apiMajorVersion, [])
		}

		apiMap.get(apiMajorVersion)!.push({
			importPath: `#~src/apis/${entry.relative_path}`,
			importAliasName: `${apiID}_V${apiMajorVersion}_Rev${apiRevision}`,
			revision: apiRevision,
			apiType(definitionType: string) {
				let code = ``

				code += `DefineAPI<`
				code += `"${apiID}", `
				code += `${apiMajorVersion}, `
				code += `${apiRevision}, `
				code += `${definitionType}`
				code += `>`

				return code
			}
		})
	}

	return map
}
