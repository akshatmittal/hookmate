// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

/// @notice List of addresses where core contracts are deployed.
library AddressConstants {
    error UnsupportedChainId();

    function getPoolManagerAddress(uint256 chainId) internal pure returns (address) {
        if (chainId == 1) {
            return address(0x000000000004444c5dc75cB358380D2e3dE08A90); // Ethereum Mainnet
        }
        if (chainId == 130) {
            return address(0x1F98400000000000000000000000000000000004); // Unichain
        }
        if (chainId == 10) {
            return address(0x9a13F98Cb987694C9F086b1F5eB990EeA8264Ec3); // Optimism
        }
        if (chainId == 8453) {
            return address(0x498581fF718922c3f8e6A244956aF099B2652b2b); // Base
        }
        if (chainId == 42161) {
            return address(0x360E68faCcca8cA495c1B759Fd9EEe466db9FB32); // Arbitrum One
        }
        if (chainId == 137) {
            return address(0x67366782805870060151383F4BbFF9daB53e5cD6); // Polygon
        }
        if (chainId == 81457) {
            return address(0x1631559198A9e474033433b2958daBC135ab6446); // Blast
        }
        if (chainId == 7777777) {
            return address(0x0575338e4C17006aE181B47900A84404247CA30f); // Zora
        }
        if (chainId == 480) {
            return address(0xb1860D529182ac3BC1F51Fa2ABd56662b7D13f33); // Worldchain
        }
        if (chainId == 57073) {
            return address(0x360E68faCcca8cA495c1B759Fd9EEe466db9FB32); // Ink
        }
        if (chainId == 1868) {
            return address(0x360E68faCcca8cA495c1B759Fd9EEe466db9FB32); // Soneium
        }
        if (chainId == 43114) {
            return address(0x360E68faCcca8cA495c1B759Fd9EEe466db9FB32); // Avalanche
        }
        if (chainId == 56) {
            return address(0x28e2Ea090877bF75740558f6BFB36A5ffeE9e9dF); // BNB Smart Chain
        }
        if (chainId == 1301) {
            return address(0x00B036B58a818B1BC34d502D3fE730Db729e62AC); // Unichain Sepolia
        }
        if (chainId == 11155111) {
            return address(0xE03A1074c86CFeDd5C142C4F04F1a1536e203543); // Sepolia
        }
        if (chainId == 84532) {
            return address(0x05E73354cFDd6745C338b50BcFDfA3Aa6fA03408); // Base Sepolia
        }
        if (chainId == 421614) {
            return address(0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317); // Arbitrum Sepolia
        }
        if (chainId == 420120000) {
            return address(0x9131B9084E6017Be19c6a0ef23f73dbB1Bf41f96); // interop-alpha-0
        }
        if (chainId == 420120001) {
            return address(0x9131B9084E6017Be19c6a0ef23f73dbB1Bf41f96); // interop-alpha-1
        }

        revert UnsupportedChainId();
    }

    function getPositionManagerAddress(uint256 chainId) internal pure returns (address) {
        if (chainId == 1) {
            return address(0xbD216513d74C8cf14cf4747E6AaA6420FF64ee9e); // Ethereum Mainnet
        }
        if (chainId == 130) {
            return address(0x4529A01c7A0410167c5740C487A8DE60232617bf); // Unichain
        }
        if (chainId == 10) {
            return address(0x3C3Ea4B57a46241e54610e5f022E5c45859A1017); // Optimism
        }
        if (chainId == 8453) {
            return address(0x7C5f5A4bBd8fD63184577525326123B519429bDc); // Base
        }
        if (chainId == 42161) {
            return address(0xd88F38F930b7952f2DB2432Cb002E7abbF3dD869); // Arbitrum One
        }
        if (chainId == 137) {
            return address(0x1Ec2eBf4F37E7363FDfe3551602425af0B3ceef9); // Polygon
        }
        if (chainId == 81457) {
            return address(0x4AD2F4CcA2682cBB5B950d660dD458a1D3f1bAaD); // Blast
        }
        if (chainId == 7777777) {
            return address(0xf66C7b99e2040f0D9b326B3b7c152E9663543D63); // Zora
        }
        if (chainId == 480) {
            return address(0xC585E0f504613b5fBf874F21Af14c65260fB41fA); // Worldchain
        }
        if (chainId == 57073) {
            return address(0x1b35d13a2E2528f192637F14B05f0Dc0e7dEB566); // Ink
        }
        if (chainId == 1868) {
            return address(0x1b35d13a2E2528f192637F14B05f0Dc0e7dEB566); // Soneium
        }
        if (chainId == 43114) {
            return address(0xB74b1F14d2754AcfcbBe1a221023a5cf50Ab8ACD); // Avalanche
        }
        if (chainId == 56) {
            return address(0x7A4a5c919aE2541AeD11041A1AEeE68f1287f95b); // BNB Smart Chain
        }
        if (chainId == 1301) {
            return address(0xf969Aee60879C54bAAed9F3eD26147Db216Fd664); // Unichain Sepolia
        }
        if (chainId == 11155111) {
            return address(0x429ba70129df741B2Ca2a85BC3A2a3328e5c09b4); // Sepolia
        }
        if (chainId == 84532) {
            return address(0x4B2C77d209D3405F41a037Ec6c77F7F5b8e2ca80); // Base Sepolia
        }
        if (chainId == 421614) {
            return address(0xAc631556d3d4019C95769033B5E719dD77124BAc); // Arbitrum Sepolia
        }
        if (chainId == 420120000) {
            return address(0x4498FE0b1DF6B476453440664A16E269B7587D0F); // interop-alpha-0
        }
        if (chainId == 420120001) {
            return address(0x4498FE0b1DF6B476453440664A16E269B7587D0F); // interop-alpha-1
        }

        revert UnsupportedChainId();
    }

    function getPermit2Address() internal pure returns (address) {
        return address(0x000000000022D473030F116dDEE9F6B43aC78BA3); // Same on all chains.
    }

    function getV4SwapRouterAddress(uint256 chainId) internal pure returns (address) {
        /*
         ** Important: Even though the contract is deployed at the same address, it's not deployed on all chains.
         */
        if (chainId == 1) {
            return address(0x00000000000044a361Ae3cAc094c9D1b14Eece97); // Ethereum Mainnet
        }
        if (chainId == 130) {
            return address(0x00000000000044a361Ae3cAc094c9D1b14Eece97); // Unichain
        }
        if (chainId == 10) {
            return address(0x00000000000044a361Ae3cAc094c9D1b14Eece97); // Optimism
        }
        if (chainId == 8453) {
            return address(0x00000000000044a361Ae3cAc094c9D1b14Eece97); // Base
        }
        if (chainId == 42161) {
            return address(0x00000000000044a361Ae3cAc094c9D1b14Eece97); // Arbitrum One
        }
        if (chainId == 137) {
            return address(0x00000000000044a361Ae3cAc094c9D1b14Eece97); // Polygon
        }
        if (chainId == 11155111) {
            return address(0x00000000000044a361Ae3cAc094c9D1b14Eece97); // Sepolia
        }
        if (chainId == 1301) {
            return address(0xdE960C7dcd629916b6618E2B7E4B4413a532550b); // Unichain Sepolia
        }
        if (chainId == 84532) {
            return address(0x00000000000044a361Ae3cAc094c9D1b14Eece97); // Base Sepolia
        }

        revert UnsupportedChainId();
    }
}
