# XNOR Gate (Exclusive NOR)

## Overview

The XNOR gate outputs `1` when the inputs are the **same**.

## Truth Table

| A   | B   | Output |
| --- | --- | ------ |
| 0   | 0   | 1      |
| 0   | 1   | 0      |
| 1   | 0   | 0      |
| 1   | 1   | 1      |

## Symbol

```
A ──────╲
        =╲──o── Out
B ──────╱
```

## Description

The XNOR (exclusive NOR) gate is the complement of XOR. It produces a `1` output when both inputs are the same — either both `0` or both `1`. XNOR is commonly used in equality comparators.

## Boolean Expression

$$\text{Out} = \overline{A \oplus B}$$
