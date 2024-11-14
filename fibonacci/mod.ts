import { main } from "./main.ts";

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

if (import.meta.main) {
	main();
}
