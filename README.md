# Hookmate

[![npm version](https://img.shields.io/npm/v/hookmate.svg)](https://www.npmjs.com/package/hookmate)
[![license](https://img.shields.io/npm/l/hookmate.svg)](LICENSE)
[![typescript](https://img.shields.io/badge/TypeScript-ready-blue.svg)](https://www.typescriptlang.org/)

Hookmate is a focused toolkit for Uniswap v4 hook development. It bundles Solidity artifacts and helpers alongside TypeScript ABIs and utilities so you can build hooks and integrate them into front-end apps with fewer moving parts.

Solidity notes:

- This repo does not vendor `v4-core` or `v4-periphery`. Install those separately to stay on the exact versions you need.

TypeScript notes:

- The published package has no runtime dependencies (optionally `viem` if you need some utilities). It ships types, ABIs, and utilities that work with your tooling.

## Solidity Features

Hookmate includes the following:

- **Artifacts**: Canonical artifacts for `V4PoolManager`, `V4PositionManager`, `Permit2`, and `V4Router`.
- **Constants**: Address constants for `PoolManager`, `PositionManager`, `Permit2`, and `V4Router`.
- **Deploy Helper**: Utilities to deploy and manage hooks and supporting artifacts.
- **Interfaces**: Additional interfaces for easier access, including `V4Router`.

## TypeScript Features

- **Type Definitions**: Strong typings for Uniswap v4 related contracts.
- **ABIs**: Organized ABIs for use with `viem` or other clients.
- **Exports**: Top-level exports and `hookmate/abi` subpath for lighter imports.

## Install

### TypeScript (npm/pnpm/yarn)

```bash
pnpm add hookmate
```

### Solidity (Foundry)

Add as a git submodule (or use your preferred dependency workflow):

```bash
git submodule add https://github.com/akshatmittal/hookmate.git lib/hookmate
```

Then ensure your `remappings.txt` includes:

```text
hookmate/=lib/hookmate/
```

## Usage

### TypeScript

```ts
import { v4, utility } from "hookmate/abi";
```

### Solidity

```solidity
import { V4PoolManager } from "hookmate/artifacts/V4PoolManager.sol";
import { AddressConstants } from "hookmate/constants/AddressConstants.sol";
```

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements.

## License

MIT License
