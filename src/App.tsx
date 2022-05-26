import React, { useEffect, useReducer } from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import NavBar from "./components/Header/NavBar";
import { Wizard } from "react-use-wizard";
import Container from "./styles/Container";
import { BankList } from "./components/Bank";
import { Login } from "./components/Login";
import { Account } from "./components/Account";
import { Status } from "./components/Status";

const Wrapper = styled.div`
  height: 100vh;
  background: #bbb;
  border: 1px solid transparent;
  padding-top: 50px;
`;

function App() {
  return (
    <Wrapper>
      <Container>
        <Wizard
          header={
            <Header>
              <NavBar />
            </Header>
          }
        >
          <BankList />
          <Login />
          <Account />
          <Status />
        </Wizard>
      </Container>
    </Wrapper>
  );
}

export default App;
