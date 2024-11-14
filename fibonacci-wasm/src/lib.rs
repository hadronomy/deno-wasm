use wasm_bindgen::prelude::*;

/// Adds two integers together.
///
/// # Arguments
///
/// * `a` - An integer to add.
/// * `b` - Another integer to add.
///
/// # Returns
///
/// The sum of `a` and `b`.
#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}

/// Computes the nth Fibonacci number using an iterative approach.
///
/// # Arguments
///
/// * `n` - The position in the Fibonacci sequence to compute.
///
/// # Returns
///
/// The nth Fibonacci number.
#[wasm_bindgen]
pub fn fibonacci(n: i32) -> i32 {
    match n {
        0 => 0,
        1 => 1,
        _ => {
            let (mut a, mut b) = (0, 1);
            for _ in 2..=n {
                let temp = a + b;
                a = b;
                b = temp;
            }
            b
        }
    }
}

/// Computes the nth Fibonacci number using Binet's formula for fast computation.
///
/// # Arguments
///
/// * `n` - The position in the Fibonacci sequence to compute.
///
/// # Returns
///
/// The nth Fibonacci number.
#[wasm_bindgen]
pub fn fast_fibonacci(n: i32) -> i32 {
    let sqrt5 = 5.0_f64.sqrt();
    let phi = (1.0 + sqrt5) / 2.0;
    let psi = (1.0 - sqrt5) / 2.0;
    ((phi.powi(n) - psi.powi(n)) / sqrt5).round() as i32
}
