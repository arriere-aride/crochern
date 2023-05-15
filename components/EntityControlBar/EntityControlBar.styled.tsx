import styled from "@emotion/styled";

export const EntityControlBarLine = styled.div(
  (props: any) => ({
    display: "grid",
    gridTemplateColumns: "50% 50%",
    marginTop: ".5rem",
    marginBottom: ".5rem",
    borderBottom: `${props.borderBottom}`,
    paddingTop: "1rem",
    paddingBottom: "1rem",
  })
);
