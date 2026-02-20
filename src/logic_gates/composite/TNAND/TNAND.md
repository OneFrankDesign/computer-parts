# TNAND Gate (Three-Input NAND)

## Overview

The TNAND gate is a composite gate built by chaining two elementary NAND gates. The first NAND takes inputs A and B, and its output is fed with input C into a second NAND.

> **Note:** Chaining two 2-input NAND gates does _not_ produce the same result as a true 3-input NAND (which would be the complement of a 3-input AND). This implementation follows the chained architecture.

## Truth Table

| A   | B   | C   | NAND(A,B) | NAND(NAND(A,B), C) |
| --- | --- | --- | --------- | ------------------ |
| 0   | 0   | 0   | 1         | 0                  |
| 0   | 0   | 1   | 1         | 0                  |
| 0   | 1   | 0   | 1         | 0                  |
| 0   | 1   | 1   | 1         | 0                  |
| 1   | 0   | 0   | 1         | 0                  |
| 1   | 0   | 1   | 1         | 0                  |
| 1   | 1   | 0   | 0         | 1                  |
| 1   | 1   | 1   | 0         | 0                  |

## Circuit Diagram

```
A ──────┐
        ├─── NAND ──┐
B ──────┘            ├─── NAND ──── Out
                     │
C ───────────────────┘
```

## Description

The TNAND gate feeds inputs A and B into a first NAND gate, then takes that intermediate result and input C into a second NAND gate to produce the final output. The only case where the output is `1` is when A and B are both `1` (making the first NAND output `0`) and C is `0` (making NAND(0, 0) = `1`).

## Boolean Expression

$$\text{Out} = \overline{\overline{A \cdot B} \cdot C}$$
