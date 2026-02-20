# NAND Gate

## Overview

The NAND gate is the complement of the AND gate. It outputs `0` only when **all** inputs are `1`.

## Truth Table

| A   | B   | Output |
| --- | --- | ------ |
| 0   | 0   | 1      |
| 0   | 1   | 1      |
| 1   | 0   | 1      |
| 1   | 1   | 0      |

## Symbol

```
A ──────┐
        ├──o── Out
B ──────┘
```

## Description

The NAND gate is one of the two **universal gates** — any other logic gate can be built entirely from NAND gates. It produces a `0` output only when all inputs are `1`. In the Nand2Tetris course, the NAND gate is treated as the primitive building block from which all other components are constructed.

## Boolean Expression

$$\text{Out} = \overline{A \cdot B}$$
