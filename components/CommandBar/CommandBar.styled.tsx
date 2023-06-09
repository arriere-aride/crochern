import styled from "@emotion/styled";

export const CommandBarContainer = styled.div`
  position: relative;
  border-style: solid;
  border-width: 1px;
  border-radius: 3px;
  width: 100%;
  max-width: 480px;
`;
export const CommandBarCaret = styled.div`
  position: absolute;
  left: 4px;
  top: 0;
  bottom: 0;
  height: 100%;
  display: flex;
  justify-items: center;
  align-items: center;
`;

export const CommandBarInputGroup = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

export const CommandBarInput = styled.input`
  padding-left: 24px;
  width: 100%;
  height: 100%;
  border: 0;
  text-transform: uppercase;
  outline: thick double;
  font-weight: 700;
`;
export const CommandBarShortCut = styled.div`
  position: absolute;
  right: 6px;
  top: 0;
  bottom: 0;
  display: flex;
  justify-items: end;
  align-items: center;
`;

export const commandBarInputSizes = {
  small: {
    fontSize: "12px",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  medium: {
    fontSize: "14px",
    paddingTop: "11px",
    paddingBottom: "11px",
  },
  large: {
    fontSize: "16px",
    paddingTop: "12px",
    paddingBottom: "12px",
  },
};
