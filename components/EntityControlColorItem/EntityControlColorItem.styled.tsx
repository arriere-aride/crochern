import styled from "@emotion/styled";

export const ColorFiller = styled.div(
  (props: any) => ({
    width: `${props.size}px`,
    height: `${props.size}px`,
    backgroundColor: `${props.value}`,
    cursor: "pointer",
  })
);
