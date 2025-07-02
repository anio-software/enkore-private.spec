//
// code based on https://hackernoon.com/mastering-type-safe-json-serialization-in-typescript
//
type JSONPrimitive = string | number | boolean | null | undefined

type JSONValue = JSONPrimitive | JSONValue[] | {
	[key: string]: JSONValue;
}

type NotAssignableToJson = | bigint | symbol | Function

type JSONCompatible<T> = unknown extends T ? never : {
	[P in keyof T]: 
		T[P] extends JSONValue ? T[P] : 
		T[P] extends NotAssignableToJson ? never : 
		JSONCompatible<T[P]>;
}

type IsArray<T> = T extends unknown[] ? true : false

// [] extends object is true so we have to check if T is an array first
type IsObject<T> = IsArray<T> extends false ? T extends object ? true : false : false

type RemoveNeverProperties<T> = IsObject<T> extends true ? {[K in keyof T as T[K] extends never ? never : K]: RemoveNeverProperties<T[K]> } : T

export type JSONCompatibleType<T> = RemoveNeverProperties<
	JSONCompatible<T>
>
