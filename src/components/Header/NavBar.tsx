import React from "react";
import { useWizard } from "react-use-wizard";
import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;

  > svg {
    cursor: pointer;
  }
`;

function NavBar() {
  const {
    isLoading,
    isLastStep,
    isFirstStep,
    activeStep,
    stepCount,
    previousStep,
    nextStep,
    goToStep,
    handleStep,
  } = useWizard();

  return (
    <NavBarContainer>
      <ArrowBackIcon onClick={() => previousStep()} />
      <CloseIcon onClick={() => goToStep(0)} />
    </NavBarContainer>
  );
}

export default NavBar;
