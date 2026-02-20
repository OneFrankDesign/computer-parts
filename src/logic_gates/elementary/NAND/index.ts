import type { Bit } from "#types/gates";

/**
 * NAND gate (universal gate)
 * Returns 0 only when both inputs are 1.
 *
 * Truth table:
 *   0, 0 → 1
 *   0, 1 → 1
 *   1, 0 → 1
 *   1, 1 → 0
 */
export function NAND(a: Bit, b: Bit): Bit {
  return a === 1 && b === 1 ? 0 : 1;
}
