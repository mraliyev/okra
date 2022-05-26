import React from "react";
import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const SuccessPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  > p {
    margin-top: 32px;
    text-align: center;
  }
`;

function Status() {
  return (
    <SuccessPage>
      <CheckCircleIcon fontSize="large" />
      <p>Your account has been successfully linked and debited.</p>
    </SuccessPage>
  );
}

export default Status;
