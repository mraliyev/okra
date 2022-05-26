import React, { useRef, useState } from "react";
import InputBase from "@mui/material/InputBase";
import styled from "styled-components";
import Title from "../Header/Title";
import Section from "../../styles/Section";
import Button from "../../styles/Button";
import { useWizard } from "react-use-wizard";

const StyledInput = styled(InputBase)`
  width: 100%;
  height: 56px;
  border: 1px solid rgba(60, 66, 87, 0.24);
  border-radius: 6px;
  padding: 16px;
  box-sizing: border-box;
  margin-bottom: 16px;
`;

const StyledP = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.1px;
  color: #222222;
  margin-top: 8px;
  margin-bottom: 16px;
`;

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { nextStep } = useWizard();

  function handleLogin() {
    const validUser = process.env.REACT_APP_USERNAME;
    const validPass = process.env.REACT_APP_PASSWORD;

    if (username !== validUser || password !== validPass) {
      setError("Please check your credentials");
    } else {
      nextStep();
    }
  }

  return (
    <Section
      body={
        <>
          <Title value="Type in your credentials" />
          <StyledP>
            By entering your GTBank credentials here, you’re authorising Okra to
            pay Kent Woods the agreed amount.
          </StyledP>
          <StyledInput
            name="username"
            placeholder="Email Address / Phone Number"
            onChange={(e) => setUsername(e.target.value)}
            onFocus={() => setError("")}
          />
          <StyledInput
            name="password"
            type="password"
            placeholder="Password / PIN"
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setError("")}
          />
          <p>{error}</p>
        </>
      }
      footer={<Button onClick={handleLogin}>Login</Button>}
    />
  );
}

export default Login;
