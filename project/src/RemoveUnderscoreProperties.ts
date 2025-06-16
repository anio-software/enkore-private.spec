type IsArray<T> = T extends unknown[] ? true : false
type IsFunction<T> = T extends (...args: any[]) => any ? true : false
type IsObject<T> =
	IsFunction<T> extends false ?
		IsArray<T> extends false ?
			T extends object ?
				true
			: false
		: false
	: false

export type RemoveUnderscoreProperties<T> = IsObject<T> extends true ? {[K in keyof Omit<T, `_${string}`>]: RemoveUnderscoreProperties<T[K]> } : T
