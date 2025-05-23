import "@total-typescript/ts-reset";
import "@total-typescript/ts-reset/dom";

declare global {
	interface ObjectConstructor {
		keys<T extends Record<string, unknown>>(o: T): (keyof T | (string & {}))[];
	}
}
