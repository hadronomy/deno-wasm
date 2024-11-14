import { bench, boxplot, type k_state, run } from "mitata";

import { fast_fibonacci, fibonacci } from "@hadronomy/fibonacci-wasm";

import { fibonacciNative } from "./mod.ts";

export function main() {
	boxplot(() => {
		bench("fibWasm($start)", function* (state: k_state) {
			const start = state.get("start");
			yield () => fibonacci(start);
		}).range("start", 1, 10_000_000, 2);

		bench("fibNative($start)", function* (state: k_state) {
			const start = state.get("start");
			yield () => fibonacciNative(start);
		}).range("start", 1, 10_000_000, 2);

		bench("fastFib($start)", function* (state: k_state) {
			const start = state.get("start");
			yield () => fast_fibonacci(start);
		}).range("start", 1, 10_000_000, 2);
	});

	run();
}

if (import.meta.main) {
	main();
}
