# TAND Gate (Three-Input AND)

## Overview

The TAND gate is a composite gate that performs a logical AND across three inputs. It is built by chaining two elementary AND gates.

## Truth Table

| A   | B   | C   | Output |
| --- | --- | --- | ------ |
| 0   | 0   | 0   | 0      |
| 0   | 0   | 1   | 0      |
| 0   | 1   | 0   | 0      |
| 0   | 1   | 1   | 0      |
| 1   | 0   | 0   | 0      |
| 1   | 0   | 1   | 0      |
| 1   | 1   | 0   | 0      |
| 1   | 1   | 1   | 1      |

## Circuit Diagram

```
A ──────┐
        ├─── AND ───┐
B ──────┘           ├─── AND ───── Out
                    │
C ──────────────────┘
```

## Description

The TAND gate outputs `1` only when all three inputs are `1`. It is constructed by feeding inputs A and B into a first AND gate, then taking that result and input C into a second AND gate. This demonstrates how composite gates are built from elementary gates.

## Boolean Expression

$$\text{Out} = (A \cdot B) \cdot C$$
