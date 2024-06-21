import styled from "styled-components";
import OldPrice from "/src/old-price/old-price";
import ActualPrice from "/src/actual-price/actual-price";
import { P } from "/src/tags";

export const PriceWrapper = styled(P)`
  margin-bottom: ${(props) => props.theme.indent};
`;

export const OldPricePositioned = styled(OldPrice)`
  margin-left: ${(props) => props.theme.indent};
`;

export const ActualPricePositioned = styled(ActualPrice)`
  margin-left: ${(props) => props.theme.indent};
`;
