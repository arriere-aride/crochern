import styled from "@emotion/styled";

export const SplashScreenContainer = styled.div`
  display: grid;
  gap: 0;
  margin-left: 28px;
  height: 700px;
  @media (min-width: 768px) {
    width: 960px;
    grid-template-columns: repeat(
      2,
      minmax(0, 1fr)
    );
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }
  @media (min-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
export const ImageStyle = {
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "100%",
};
export const SplashScreenLeft = styled.div`
  position: relative;
  @media (min-width: 768px) {
    background: #f8fab1;
  }
`;
export const SplashScreenRight = styled.div`
  grid-column: span 1 / span 1;
  color: #373722;

  @media (min-width: 768px) {
    background: #f8fab1;
  }
`;
export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
export const H1 = styled.h1`
  font-size: 3.75rem;
  line-height: 1;
  font-weight: 700;
`;
export const H2 = styled.h2`
  font-size: 2.25rem;
  line-height: 2.5rem;
`;
export const ComingSoon = styled.div`
  font-style: italic;
  text-align: right;
`;
export const CenteredIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`;
