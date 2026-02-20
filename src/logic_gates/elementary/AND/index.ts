import type { Bit } from "#types/gates";

/**
 * AND gate
 * Returns 1 only when both inputs are 1.
 *
 * Truth table:
 *   0, 0 → 0
 *   0, 1 → 0
 *   1, 0 → 0
 *   1, 1 → 1
 */
export function AND(a: Bit, b: Bit): Bit {
  return a === 1 && b === 1 ? 1 : 0;
}
