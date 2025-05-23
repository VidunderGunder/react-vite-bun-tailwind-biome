import "@total-typescript/ts-reset";
import "@total-typescript/ts-reset/dom";

declare global {
	interface ObjectConstructor {
		/**
		 * Returns an array of a given object's own enumerable property names,
		 * iterated in the same order that a normal loop would.
		 *
		 * This augmented signature attempts to provide more specific key types.
		 */
		keys<T extends Record<string, unknown>>(o: T): (keyof T | (string & {}))[];
	}
}
