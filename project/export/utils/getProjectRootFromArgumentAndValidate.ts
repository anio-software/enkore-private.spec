import {getProjectRootFromArgument} from "./getProjectRootFromArgument.ts"
import {validateProjectRoot} from "./validateProjectRoot.ts"

export async function getProjectRootFromArgumentAndValidate(
	root: Parameters<typeof getProjectRootFromArgument>[0]
): Promise<string> {
	const projectRoot = getProjectRootFromArgument(root)

	await validateProjectRoot(projectRoot)

	return projectRoot
}
