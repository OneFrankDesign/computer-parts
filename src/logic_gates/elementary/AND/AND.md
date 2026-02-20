# AND Gate

## Overview

The AND gate outputs `1` only when **all** of its inputs are `1`.

## Truth Table

| A   | B   | Output |
| --- | --- | ------ |
| 0   | 0   | 0      |
| 0   | 1   | 0      |
| 1   | 0   | 0      |
| 1   | 1   | 1      |

## Symbol

```
A ──────┐
        ├───── Out
B ──────┘
```

## Description

The AND gate performs logical conjunction. It only produces a `1` output when every input is `1`. If any input is `0`, the output is `0`. The AND gate can be constructed from two NAND gates or from a NAND gate followed by a NOT gate.

## Boolean Expression

$$\text{Out} = A \cdot B$$
