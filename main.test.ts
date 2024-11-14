import { expect } from "jsr:@std/expect";
import {
	fibonacci,
	fast_fibonacci,
} from "./fibonacci-wasm/pkg/fibonacci_wasm.js";
import { fibonacciNative } from "./main.ts";

Deno.test("fibanacci(10) return 55", () => {
	expect(fibonacci(10)).toBe(55);
	expect(fibonacciNative(10)).toBe(55);
	expect(fast_fibonacci(10)).toBe(55);
});

Deno.test("fibanacci(20) return 6765", () => {
	expect(fibonacci(20)).toBe(6765);
	expect(fibonacciNative(20)).toBe(6765);
	expect(fast_fibonacci(20)).toBe(6765);
});

Deno.test("fibanacci(30) return 832040", () => {
	expect(fibonacci(30)).toBe(832040);
	expect(fibonacciNative(30)).toBe(832040);
	expect(fast_fibonacci(30)).toBe(832040);
});

Deno.test("fibanacci(40) return 102334155", () => {
	expect(fibonacci(40)).toBe(102334155);
	expect(fibonacciNative(40)).toBe(102334155);
	expect(fast_fibonacci(40)).toBe(102334155);
});
