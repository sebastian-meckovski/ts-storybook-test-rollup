import styled from "styled-components";

export const textSizes = {
  small: "12px",
  medium: "20px",
  large: "90px",
};
export interface TextProps {
  /** Comes from the enum textSizes that has values '12px' | '20px' | '90px' */
  size?: "12px" | "20px" | "90px";
}

export const Text = styled.p<TextProps>`
  ${({ size }) => `
  font-size: ${[`${size}`]}`};
`;
