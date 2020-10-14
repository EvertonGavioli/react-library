import styled from "styled-components";

import { Typography } from "@material-ui/core";

export const StyledTypography = styled(Typography)<{ fontWeight?: number }>`
  font-weight: ${(props) => props.fontWeight};
`;
