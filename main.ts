import { run, bench, boxplot, type k_state } from "mitata";

import { fibonacci, fast_fibonacci } from "@hadronomy/fibonacci-wasm";

export function fibonacciNative(n: number): number {
	let a = 0;
	let b = 1;
	let temp: number;
	for (let i = 2; i <= n; i++) {
		temp = a + b;
		a = b;
		b = temp;
	}
	return n === 0 ? a : b;
}

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
