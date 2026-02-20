import type { Bit } from "#types/gates";

/**
 * OR gate
 * Returns 1 when at least one input is 1.
 *
 * Truth table:
 *   0, 0 → 0
 *   0, 1 → 1
 *   1, 0 → 1
 *   1, 1 → 1
 */
export function OR(a: Bit, b: Bit): Bit {
  return a === 1 || b === 1 ? 1 : 0;
}
