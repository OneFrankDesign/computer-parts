# XOR Gate (Exclusive OR)

## Overview

The XOR gate outputs `1` when the inputs are **different**.

## Truth Table

| A   | B   | Output |
| --- | --- | ------ |
| 0   | 0   | 0      |
| 0   | 1   | 1      |
| 1   | 0   | 1      |
| 1   | 1   | 0      |

## Symbol

```
A ──────╲
        =╲───── Out
B ──────╱
```

## Description

The XOR (exclusive OR) gate produces a `1` output only when its inputs differ. Unlike the OR gate, XOR outputs `0` when both inputs are `1`. XOR is essential in arithmetic circuits — it forms the core of half adders and full adders.

## Boolean Expression

$$\text{Out} = A \oplus B$$
