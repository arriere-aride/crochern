const AABB = (
  point: { x: number; y: number },
  box: {
    x: number;
    y: number;
    width: number;
    height: number;
  }
): boolean => {
  const X =
    point.x >= box.x &&
    point.x <= box.width + box.x;
  const Y =
    point.y >= box.y &&
    point.y <= box.height + box.y;
  return X && Y;
};

export { AABB };
