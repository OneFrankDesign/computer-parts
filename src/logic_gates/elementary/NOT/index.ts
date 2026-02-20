import type { Bit } from "#types/gates";

/**
 * NOT gate (Inverter)
 * Returns the complement of the input.
 *
 * Truth table:
 *   0 → 1
 *   1 → 0
 */
export function NOT(a: Bit): Bit {
  return a === 0 ? 1 : 0;
}
