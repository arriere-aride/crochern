import { TargetEntity } from "@/stores";

export interface RenderTargetBox {
  targets: TargetEntity[];
  onTargetEntityClick: (...values: any) => any;
}
