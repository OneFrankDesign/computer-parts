import type { Bit } from "#types/gates";

/**
 * XNOR gate (Exclusive NOR)
 * Returns 1 when both inputs are the same.
 *
 * Truth table:
 *   0, 0 → 1
 *   0, 1 → 0
 *   1, 0 → 0
 *   1, 1 → 1
 */
export function XNOR(a: Bit, b: Bit): Bit {
  return a === b ? 1 : 0;
}
