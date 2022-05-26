import React from "react";
import styled from "styled-components";
import MuiButton from "@mui/material/Button";

const StyledButton = styled(MuiButton)`
  && {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 10px;
    width: 100%;
    height: 42px;
    background: #222c3b;
    border-radius: 6px;
    color: #ffffff;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;

    :hover {
      background: #222c3b;
    }
  }
`;

export default StyledButton;
