import styled, { css } from "styled-components";
import { rgba } from "polished";
import { device } from "../Styles/MediaQueries";

import { makeStyles, Button } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  contained: {
    "&$disabled": {
      color: "#fff",
    },
  },
  outlined: {
    "&$disabled": {
      borderWidth: "2px",
      boxShadow: "none",
    },
  },
  disabled: {},
}));

interface StyledButtonProps {
  issecondary?: string;
  bgcolor: string;
}

export const StyledButton = styled(Button)<StyledButtonProps>`
  min-height: 56px;
  min-width: 136px;

  font-size: 20px;
  font-weight: 800;
  text-transform: none;
  border-radius: 100px;

  ${(props) =>
    props.issecondary === "true"
      ? css`
          color: ${props.bgcolor};
          border: 2px solid ${rgba(props.bgcolor, 0.5)};
          box-shadow: 0px 5px 15px 0px ${rgba(props.bgcolor, 0.15)};

          &:hover {
            border: 2px solid ${rgba(props.bgcolor, 0.5)};
            box-shadow: 0px 5px 15px 0px ${rgba(props.bgcolor, 0.5)};
          }
        `
      : css`
          box-shadow: 0px 5px 15px 0px ${rgba(props.bgcolor, 0.35)};
          background-color: ${props.bgcolor};

          &:hover {
            background-color: ${props.bgcolor};
            box-shadow: 0px 5px 15px 0px ${rgba(props.bgcolor, 0.75)};
          }
        `}

  @media ${device.sm} {
    min-width: 200px;
  }
`;
