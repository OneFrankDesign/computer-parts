# Computer Parts

An educational repository to learn about computer architecture — built from the ground up in TypeScript.

This project covers fundamental components like logic gates, arithmetic units, registers, memory, and CPU architecture. It also includes an assembler and low-level programs to demonstrate how these components work together. It loosely follows the structure of the [Nand2Tetris](https://www.nand2tetris.org/) course, but implemented in TypeScript for a modern development experience.

## Project Structure

```
src/
├── types/                  # Shared TypeScript types
│   └── gates.ts            # Bit type and gate-related types
├── logic_gates/
│   ├── elementary/         # Fundamental logic gates
│   │   ├── NOT/            # Inverter gate
│   │   ├── AND/            # AND gate
│   │   ├── OR/             # OR gate
│   │   ├── NAND/           # NAND gate (universal)
│   │   ├── NOR/            # NOR gate (universal)
│   │   ├── XOR/            # Exclusive OR gate
│   │   └── XNOR/          # Exclusive NOR gate
│   └── composite/          # Gates built from elementary gates
│       ├── TAND/           # Three-input AND
│       └── TNAND/          # Three-input NAND
├── arithmetic_logic/       # Arithmetic and logic operations (adders, ALU, etc.)
├── registers_and_memory/   # Registers, latches, and memory components
├── computer_architecture/  # CPU architecture and system design
├── assembler/              # Assembler implementation
└── low_level_programs/     # Low-level programs and examples
tests/                      # Test files
dist/                       # Compiled output (git-ignored)
```

## Logic Gates

Each logic gate has its own directory containing:

- **`index.ts`** — TypeScript implementation of the gate
- **`<GATE>.md`** — Documentation with overview, truth table, circuit diagram, and boolean expression

### Elementary Gates

Fundamental gates that operate on one or two inputs.

| Gate                                            | Description                                                  | Universal |
| ----------------------------------------------- | ------------------------------------------------------------ | --------- |
| [NOT](src/logic_gates/elementary/NOT/NOT.md)    | Outputs the complement of the input                          | No        |
| [AND](src/logic_gates/elementary/AND/AND.md)    | Outputs `1` only when all inputs are `1`                     | No        |
| [OR](src/logic_gates/elementary/OR/OR.md)       | Outputs `1` when at least one input is `1`                   | No        |
| [NAND](src/logic_gates/elementary/NAND/NAND.md) | Complement of AND — outputs `0` only when all inputs are `1` | Yes       |
| [NOR](src/logic_gates/elementary/NOR/NOR.md)    | Complement of OR — outputs `1` only when all inputs are `0`  | Yes       |
| [XOR](src/logic_gates/elementary/XOR/XOR.md)    | Outputs `1` when inputs are different                        | No        |
| [XNOR](src/logic_gates/elementary/XNOR/XNOR.md) | Outputs `1` when inputs are the same                         | No        |

### Composite Gates

Gates built by chaining elementary gates together.

| Gate                                              | Description                                                      | Built From |
| ------------------------------------------------- | ---------------------------------------------------------------- | ---------- |
| [TAND](src/logic_gates/composite/TAND/TAND.md)    | Three-input AND — outputs `1` only when all three inputs are `1` | 2× AND     |
| [TNAND](src/logic_gates/composite/TNAND/TNAND.md) | Three-input chained NAND                                         | 2× NAND    |

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/)

## Getting Started

```bash
# Install dependencies
pnpm install

# Compile TypeScript
pnpm run compile

# Run the project
node dist/index.js
```

## Testing

Tests are written with [Vitest](https://vitest.dev/) and live in the `tests/` directory.

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm run test:watch

# Run tests with coverage
pnpm run test:coverage
```

## License

ISC
