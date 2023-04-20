import styled from "styled-components";

export enum textSizes {
  "small" = "-small",
  "body" = "",
  "lead" = "-large",
}

export declare type textSizesType = keyof typeof textSizes;

export interface TextProps {
  /** Comes from the enum textSizes that has values 'small' | 'body' | 'lead' */
  size?: "small" | "body" | "lead" | textSizes;
  as?: string;
}

export const Text = styled.p<TextProps>`
  font-family: CoopBank;
  font-size: 16px;
  line-height: 20px;
`;
export const ErrorText = styled.p<TextProps>`
  font-family: CoopBank;
  color: #da1e28;
`;

export const InlineErrorText = styled.div`
  color: #da1e28;
  margin-left: 10px;
`;

export const WarningText = styled.p<TextProps>`
  font-family: CoopBank;
  color: #da1e28;
`;

export const CapitalizedText = styled.p<TextProps>`
  text-transform: capitalize;
`;

Text.defaultProps = {
  as: "p",
  size: textSizes.body,
};
