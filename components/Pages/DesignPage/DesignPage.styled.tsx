import styled from "@emotion/styled";

export const DesignPageStyle = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit, minmax(28px, 6fr))",
  gap: "1rem",
  backgroundColor: "#2b2b2b",
  position: "relative",
  height: "100vh",
  overflow: "hidden",
};

export const ToolBarContainer = styled.div`
  width: 28px;
  position: absolute;
  z-index: 20;
  height: 100%;
  background-color: #484848;
`;
export const GridContainer = styled.div`
  grid-column: span 3;
  background-color: #484848;
  margin-top: 4rem;
  margin-bottom: 5rem;
`;

export const EntityControlBarContainer = styled.div``;

export const SplashScreenContainer = styled.div`
  display: ${({
    visible,
  }: {
    visible: boolean;
  }) => (visible ? "flex" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;
