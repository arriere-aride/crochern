import { Fragment, Children, cloneElement } from "react";

interface IResizeEntity {
  /**
   * Wich entity to use?
   */
  entity: React.ReactNode | JSX.Element;
  /**
   * What size to apply, in px
   */
  size?: number;
  /**
   * What scale to apply, ie [scale]-times zooming
   */
  scale?: number;
  /**
   * How to behave onResize?
   */
  onResize?: (...v: any) => any;
}

export const ResizeEntity = ({
  entity,
  size = 16,
  scale = 1,
  onResize,
}: IResizeEntity): JSX.Element => {
  return (
    <Fragment>
      {Children.map(entity, (child) =>
        cloneElement(child as any, {
          size: size * scale,
        })
      )}
    </Fragment>
  );
};
