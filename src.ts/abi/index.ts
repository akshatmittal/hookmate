import { Permit2Artifact } from "./utility/Permit2";
import { UniversalRouterArtifact } from "./utility/UniversalRouter";
import { PoolManagerArtifact } from "./v4/PoolManager";
import { PositionManagerArtifact } from "./v4/PositionManager";
import { QuoterArtifact } from "./v4/Quoter";
import { StateViewArtifact } from "./v4/StateView";

export const v4 = {
  QuoterArtifact,
  PositionManagerArtifact,
  PoolManagerArtifact,
  StateViewArtifact,
};

export const utility = {
  Permit2Artifact,
  UniversalRouterArtifact,
};
