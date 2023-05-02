import {
  SlipSnitch,
  SingleCrochet,
  Chain,
  HalfDoubleCrochet,
  DoubleCrochet,
  TrebleCrochet,
  DoubleTrebleCrochet,
} from "@/components/RenderEntity";
import { ActionTypes } from "@/stores/EntityMoveReducer";
import store from "@/stores/EntityMoveStore";

// @TODO move to data/ToolBarTools/
export const tools = [
  { label: "Slip Snitch", entity: <SlipSnitch /> },
  { label: "Single Crochet", entity: <SingleCrochet /> },
  { label: "Chain", entity: <Chain /> },
  { label: "Half Double Crochet", entity: <HalfDoubleCrochet /> },
  { label: "Double Crochet", entity: <DoubleCrochet /> },
  { label: "Treble Crochet", entity: <TrebleCrochet /> },
  { label: "Double Treble Crochet", entity: <DoubleTrebleCrochet /> },
];

export function OnToolBarEntityClick({
  index = 0,
  e,
}: {
  e: any;
  index: number;
}): any {
  e.preventDefault();
  const movableEntity = {
    entity: tools[index].entity,
    _id: index.toString(),
    label: tools[index].label,
    position: { x: e.screenX, y: e.screenY },
    inGrid: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  store.dispatch({ type: ActionTypes.STASH, entity: movableEntity });
  return true;
}
