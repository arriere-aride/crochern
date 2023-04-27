import { Fragment } from "react";

interface RotateEntity {
  /**
   * Wich entity to use?
   */
  entity: React.ReactNode | JSX.Element;
  /**
   * What rotation to apply, angle in degrees
   */
  rotation?: number;
  /**
   * How to behave onResize?
   */
  onRotate?: (...v: any) => any;
}

export const RotateEntity = ({
  entity,
  rotation = 0,
  onRotate,
}: RotateEntity): JSX.Element => {
  return (
    <Fragment>
      <g
        transform={`rotate(${rotation})`}
        style={{ transformOrigin: "center", transformBox: "fill-box" }}
      >
        {entity}
      </g>
    </Fragment>
  );
};
