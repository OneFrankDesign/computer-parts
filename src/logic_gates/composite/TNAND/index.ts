import type { Bit } from "#types/gates";
import { NAND } from "#logic_gates/NAND";

/**
 * TNAND gate (Three-input NAND)
 * Chains two NAND gates: the first NAND takes inputs A and B,
 * its output is fed with input C into a second NAND.
 *
 * Note: A three-input NAND is NOT equivalent to chaining two
 * two-input NANDs. A true three-input NAND is the complement
 * of a three-input AND. This implementation uses the chained
 * NAND approach as specified.
 *
 * Truth table (chained NAND):
 *   0, 0, 0 → 0
 *   0, 0, 1 → 0
 *   0, 1, 0 → 0
 *   0, 1, 1 → 0
 *   1, 0, 0 → 0
 *   1, 0, 1 → 0
 *   1, 1, 0 → 1
 *   1, 1, 1 → 0
 */
export function TNAND(a: Bit, b: Bit, c: Bit): Bit {
  const ab = NAND(a, b);
  return NAND(ab, c);
}
