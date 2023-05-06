import {
  Chain,
  DoubleCrochet,
  DoubleTrebleCrochet,
  HalfDoubleCrochet,
  SingleCrochet,
  SlipSnitch,
  TrebleCrochet,
} from "@/components/RenderEntity";

const tools = [
  {
    label: "Slip Snitch",
    entity: <SlipSnitch />,
  },
  {
    label: "Single Crochet",
    entity: <SingleCrochet />,
  },
  { label: "Chain", entity: <Chain /> },
  {
    label: "Half Double Crochet",
    entity: <HalfDoubleCrochet />,
  },
  {
    label: "Double Crochet",
    entity: <DoubleCrochet />,
  },
  {
    label: "Treble Crochet",
    entity: <TrebleCrochet />,
  },
  {
    label: "Double Treble Crochet",
    entity: <DoubleTrebleCrochet />,
  },
];
export { tools };
