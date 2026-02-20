import type { Bit } from "#types/gates";
import { AND } from "#logic_gates/AND";

/**
 * TAND gate (Three-input AND)
 * Chains two AND gates: the first AND takes inputs A and B,
 * its output is fed with input C into a second AND.
 *
 * Truth table:
 *   0, 0, 0 → 0
 *   0, 0, 1 → 0
 *   0, 1, 0 → 0
 *   0, 1, 1 → 0
 *   1, 0, 0 → 0
 *   1, 0, 1 → 0
 *   1, 1, 0 → 0
 *   1, 1, 1 → 1
 */
export function TAND(a: Bit, b: Bit, c: Bit): Bit {
  const ab = AND(a, b);
  return AND(ab, c);
}
