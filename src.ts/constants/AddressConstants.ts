import type { Address } from "viem";
import {
  mainnet,
  optimism,
  base,
  arbitrum,
  polygon,
  blast,
  zora,
  worldchain,
  ink,
  soneium,
  avalanche,
  bsc,
  celo,
  sepolia,
  baseSepolia,
  arbitrumSepolia,
  unichain,
  monad,
  unichainSepolia,
} from "viem/chains";

export class UnsupportedChainError extends Error {
  constructor(chainId?: number) {
    super(`Unsupported Chain: ${chainId ?? "Unknown"}`);

    this.name = "UnsupportedChainError";
  }
}

type SupportedChain = ReturnType<typeof getSupportedChains>[number]["id"];
type Mapping<T> = Record<SupportedChain, T>;

const POOL_MANAGER_ADDRESSES: Mapping<Address> = {
  [mainnet.id]: "0x000000000004444c5dc75cB358380D2e3dE08A90",
  [unichain.id]: "0x1f98400000000000000000000000000000000004",
  [optimism.id]: "0x9a13f98cb987694c9f086b1f5eb990eea8264ec3",
  [base.id]: "0x498581ff718922c3f8e6a244956af099b2652b2b",
  [arbitrum.id]: "0x360e68faccca8ca495c1b759fd9eee466db9fb32",
  [polygon.id]: "0x67366782805870060151383f4bbff9dab53e5cd6",
  [blast.id]: "0x1631559198a9e474033433b2958dabc135ab6446",
  [zora.id]: "0x0575338e4c17006ae181b47900a84404247ca30f",
  [worldchain.id]: "0xb1860d529182ac3bc1f51fa2abd56662b7d13f33",
  [ink.id]: "0x360e68faccca8ca495c1b759fd9eee466db9fb32",
  [soneium.id]: "0x360e68faccca8ca495c1b759fd9eee466db9fb32",
  [avalanche.id]: "0x06380c0e0912312b5150364b9dc4542ba0dbbc85",
  [bsc.id]: "0x28e2ea090877bf75740558f6bfb36a5ffee9e9df",
  [celo.id]: "0x288dc841A52FCA2707c6947B3A777c5E56cd87BC",
  [monad.id]: "0x188d586ddcf52439676ca21a244753fa19f9ea8e",
  // Testnets
  [unichainSepolia.id]: "0x00b036b58a818b1bc34d502d3fe730db729e62ac",
  [sepolia.id]: "0xE03A1074c86CFeDd5C142C4F04F1a1536e203543",
  [baseSepolia.id]: "0x05E73354cFDd6745C338b50BcFDfA3Aa6fA03408",
  [arbitrumSepolia.id]: "0xFB3e0C6F74eB1a21CC1Da29aeC80D2Dfe6C9a317",
};

const POSITION_MANAGER_ADDRESSES: Mapping<Address> = {
  [mainnet.id]: "0xbd216513d74c8cf14cf4747e6aaa6420ff64ee9e",
  [unichain.id]: "0x4529a01c7a0410167c5740c487a8de60232617bf",
  [optimism.id]: "0x3c3ea4b57a46241e54610e5f022e5c45859a1017",
  [base.id]: "0x7c5f5a4bbd8fd63184577525326123b519429bdc",
  [arbitrum.id]: "0xd88f38f930b7952f2db2432cb002e7abbf3dd869",
  [polygon.id]: "0x1ec2ebf4f37e7363fdfe3551602425af0b3ceef9",
  [blast.id]: "0x4ad2f4cca2682cbb5b950d660dd458a1d3f1baad",
  [zora.id]: "0xf66c7b99e2040f0d9b326b3b7c152e9663543d63",
  [worldchain.id]: "0xc585e0f504613b5fbf874f21af14c65260fb41fa",
  [ink.id]: "0x1b35d13a2e2528f192637f14b05f0dc0e7deb566",
  [soneium.id]: "0x1b35d13a2e2528f192637f14b05f0dc0e7deb566",
  [avalanche.id]: "0xb74b1f14d2754acfcbbe1a221023a5cf50ab8acd",
  [bsc.id]: "0x7a4a5c919ae2541aed11041a1aeee68f1287f95b",
  [celo.id]: "0xf7965f3981e4d5bc383bfbcb61501763e9068ca9",
  [monad.id]: "0x5b7ec4a94ff9bedb700fb82ab09d5846972f4016",
  // Testnets
  [unichainSepolia.id]: "0xf969aee60879c54baaed9f3ed26147db216fd664",
  [sepolia.id]: "0x429ba70129df741B2Ca2a85BC3A2a3328e5c09b4",
  [baseSepolia.id]: "0x4b2c77d209d3405f41a037ec6c77f7f5b8e2ca80",
  [arbitrumSepolia.id]: "0xAc631556d3d4019C95769033B5E719dD77124BAc",
};

const STATE_VIEW_ADDRESSES: Mapping<Address> = {
  [mainnet.id]: "0x7ffe42c4a5deea5b0fec41c94c136cf115597227",
  [unichain.id]: "0x86e8631a016f9068c3f085faf484ee3f5fdee8f2",
  [optimism.id]: "0xc18a3169788f4f75a170290584eca6395c75ecdb",
  [base.id]: "0xa3c0c9b65bad0b08107aa264b0f3db444b867a71",
  [arbitrum.id]: "0x76fd297e2d437cd7f76d50f01afe6160f86e9990",
  [polygon.id]: "0x5ea1bd7974c8a611cbab0bdcafcb1d9cc9b3ba5a",
  [blast.id]: "0x12a88ae16f46dce4e8b15368008ab3380885df30",
  [zora.id]: "0x385785af07d63b50d0a0ea57c4ff89d06adf7328",
  [worldchain.id]: "0x51d394718bc09297262e368c1a481217fdeb71eb",
  [ink.id]: "0x76fd297e2d437cd7f76d50f01afe6160f86e9990",
  [soneium.id]: "0x76fd297e2d437cd7f76d50f01afe6160f86e9990",
  [avalanche.id]: "0xc3c9e198c735a4b97e3e683f391ccbdd60b69286",
  [bsc.id]: "0xd13dd3d6e93f276fafc9db9e6bb47c1180aee0c4",
  [celo.id]: "0xbc21f8720babf4b20d195ee5c6e99c52b76f2bfb",
  [monad.id]: "0x77395f3b2e73ae90843717371294fa97cc419d64",
  // Testnets
  [unichainSepolia.id]: "0xc199f1072a74d4e905aba1a84d9a45e2546b6222",
  [sepolia.id]: "0xe1dd9c3fa50edb962e442f60dfbc432e24537e4c",
  [baseSepolia.id]: "0x571291b572ed32ce6751a2cb2486ebee8defb9b4",
  [arbitrumSepolia.id]: "0x9d467fa9062b6e9b1a46e26007ad82db116c67cb",
};

const QUOTER_ADDRESSES: Mapping<Address> = {
  [mainnet.id]: "0x52f0e24d1c21c8a0cb1e5a5dd6198556bd9e1203",
  [unichain.id]: "0x333e3c607b141b18ff6de9f258db6e77fe7491e0",
  [optimism.id]: "0x1f3131a13296fb91c90870043742c3cdbff1a8d7",
  [base.id]: "0x0d5e0f971ed27fbff6c2837bf31316121532048d",
  [arbitrum.id]: "0x3972c00f7ed4885e145823eb7c655375d275a1c5",
  [polygon.id]: "0xb3d5c3dfc3a7aebff71895a7191796bffc2c81b9",
  [blast.id]: "0x6f71cdcb0d119ff72c6eb501abceb576fbf62bcf",
  [zora.id]: "0x5edaccc0660e0a2c44b06e07ce8b915e625dc2c6",
  [worldchain.id]: "0x55d235b3ff2daf7c3ede0defc9521f1d6fe6c5c0",
  [ink.id]: "0x3972c00f7ed4885e145823eb7c655375d275a1c5",
  [soneium.id]: "0x3972c00f7ed4885e145823eb7c655375d275a1c5",
  [avalanche.id]: "0xbe40675bb704506a3c2ccfb762dcfd1e979845c2",
  [bsc.id]: "0x9f75dd27d6664c475b90e105573e550ff69437b0",
  [celo.id]: "0x28566da1093609182dff2cb2a91cfd72e61d66cd",
  [monad.id]: "0xa222dd357a9076d1091ed6aa2e16c9742dd26891",
  // Testnets
  [unichainSepolia.id]: "0x56dcd40a3f2d466f48e7f48bdbe5cc9b92ae4472",
  [sepolia.id]: "0x61b3f2011a92d183c7dbadbda940a7555ccf9227",
  [baseSepolia.id]: "0x4a6513c898fe1b2d0e78d3b0e0a4a151589b1cba",
  [arbitrumSepolia.id]: "0x7de51022d70a725b508085468052e25e22b5c4c9",
};

const UNIVERSAL_ROUTER_ADDRESSES: Mapping<Address> = {
  [mainnet.id]: "0x66a9893cc07d91d95644aedd05d03f95e1dba8af",
  [unichain.id]: "0xef740bf23acae26f6492b10de645d6b98dc8eaf3",
  [optimism.id]: "0x851116d9223fabed8e56c0e6b8ad0c31d98b3507",
  [base.id]: "0x6ff5693b99212da76ad316178a184ab56d299b43",
  [arbitrum.id]: "0xa51afafe0263b40edaef0df8781ea9aa03e381a3",
  [polygon.id]: "0x1095692a6237d83c6a72f3f5efedb9a670c49223",
  [blast.id]: "0xeabbcb3e8e415306207ef514f660a3f820025be3",
  [zora.id]: "0x3315ef7ca28db74abadc6c44570efdf06b04b020",
  [worldchain.id]: "0x8ac7bee993bb44dab564ea4bc9ea67bf9eb5e743",
  [ink.id]: "0x112908dac86e20e7241b0927479ea3bf935d1fa0",
  [soneium.id]: "0x4cded7edf52c8aa5259a54ec6a3ce7c6d2a455df",
  [avalanche.id]: "0x94b75331ae8d42c1b61065089b7d48fe14aa73b7",
  [bsc.id]: "0x1906c1d672b88cd1b9ac7593301ca990f94eae07",
  [celo.id]: "0xcb695bc5d3aa22cad1e6df07801b061a05a0233a",
  [monad.id]: "0x0d97dc33264bfc1c226207428a79b26757fb9dc3",
  // Testnets
  [unichainSepolia.id]: "0xf70536b3bcc1bd1a972dc186a2cf84cc6da6be5d",
  [sepolia.id]: "0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b",
  [baseSepolia.id]: "0x492e6456d9528771018deb9e87ef7750ef184104",
  [arbitrumSepolia.id]: "0xefd1d4bd4cf1e86da286bb4cb1b8bced9c10ba47",
};

export function getSupportedChains() {
  return [
    mainnet,
    unichain,
    optimism,
    base,
    arbitrum,
    polygon,
    blast,
    zora,
    worldchain,
    ink,
    soneium,
    avalanche,
    bsc,
    celo,
    monad,
    unichainSepolia,
    sepolia,
    baseSepolia,
    arbitrumSepolia,
  ];
}

export function getUniswapContracts(chainId: number) {
  if (!getSupportedChains().some((chain) => chain.id === chainId)) {
    throw new UnsupportedChainError(chainId);
  }

  return {
    v4: {
      poolManager: POOL_MANAGER_ADDRESSES[chainId as SupportedChain],
      positionManager: POSITION_MANAGER_ADDRESSES[chainId as SupportedChain],
      stateView: STATE_VIEW_ADDRESSES[chainId as SupportedChain],
      quoter: QUOTER_ADDRESSES[chainId as SupportedChain],
    },
    utility: {
      permit2: "0x000000000022D473030F116dDEE9F6B43aC78BA3" as Address,
      universalRouter: UNIVERSAL_ROUTER_ADDRESSES[chainId as SupportedChain],
    },
  };
}
