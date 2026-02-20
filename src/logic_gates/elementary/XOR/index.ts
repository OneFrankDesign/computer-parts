import type { Bit } from "#types/gates";

/**
 * XOR gate (Exclusive OR)
 * Returns 1 when inputs are different.
 *
 * Truth table:
 *   0, 0 → 0
 *   0, 1 → 1
 *   1, 0 → 1
 *   1, 1 → 0
 */
export function XOR(a: Bit, b: Bit): Bit {
  return a !== b ? 1 : 0;
}
