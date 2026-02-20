# NOR Gate

## Overview

The NOR gate is the complement of the OR gate. It outputs `1` only when **all** inputs are `0`.

## Truth Table

| A   | B   | Output |
| --- | --- | ------ |
| 0   | 0   | 1      |
| 0   | 1   | 0      |
| 1   | 0   | 0      |
| 1   | 1   | 0      |

## Symbol

```
A ──────╲
         ╲──o── Out
B ──────╱
```

## Description

The NOR gate is the other **universal gate** alongside NAND — any logic gate can be built entirely from NOR gates. It produces a `1` output only when all inputs are `0`.

## Boolean Expression

$$\text{Out} = \overline{A + B}$$
