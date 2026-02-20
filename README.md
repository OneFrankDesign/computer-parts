# Computer Parts

An educational repository to learn about computer architecture — built from the ground up in TypeScript.

## Project Structure

```
src/
├── logic_gates/            # Fundamental logic gates (AND, OR, NOT, etc.)
├── arithmetic_logic/       # Arithmetic and logic operations (adders, ALU, etc.)
├── registers_and_memory/   # Registers, latches, and memory components
├── computer_architecture/  # CPU architecture and system design
├── assembler/              # Assembler implementation
├── low_level_programs/     # Low-level programs and examples
└── index.ts                # Entry point
tests/                      # Test files
dist/                       # Compiled output (git-ignored)
```

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
