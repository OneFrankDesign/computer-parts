import type { Bit } from "#types/gates";

/**
 * NOR gate (universal gate)
 * Returns 1 only when both inputs are 0.
 *
 * Truth table:
 *   0, 0 → 1
 *   0, 1 → 0
 *   1, 0 → 0
 *   1, 1 → 0
 */
export function NOR(a: Bit, b: Bit): Bit {
  return a === 0 && b === 0 ? 1 : 0;
}
