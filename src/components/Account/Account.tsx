import React, { useState } from "react";
import { useWizard } from "react-use-wizard";
import Title from "../Header/Title";
import Checkbox from "@mui/material/Checkbox";
import Button from "../../styles/Button";
import Section from "../../styles/Section";
import styled from "styled-components";

const data = {
  name: "TOKUNBO O. ADEDEJI",
  accounts: [
    {
      name: "Savings",
      nuban: "0123127823",
      balance: 440520.76,
      currency: "ngn",
    },
    {
      name: "Current",
      nuban: "0123127824",
      balance: 22827.3,
      currency: "ngn",
    },
    {
      name: "Domiciliary",
      nuban: "0123127825",
      balance: 3000.45,
      currency: "usd",
    },
  ],
};

const Tile = styled.div<{ checked: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  height: 74px;
  background: #ffffff;
  border: 1px solid #eeeff0;

  ${({ checked }) =>
    checked && `box-shadow: 0px 8px 16px rgba(57, 83, 123, 0.16)`};

  border-radius: 6px;
  width: 100%;
  margin-bottom: 24px;

  div {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.01px;
    color: #222222;
  }
`;

const AccountData = styled.div`
  margin-top: 24px;
`;

const AccountTitle = styled.p`
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.01px;
  text-transform: uppercase;
  color: #222222;
  margin-bottom: 8px;
`;

function Account() {
  const [checkedState, setCheckedState] = useState<boolean[]>(
    new Array(data.accounts.length).fill(false)
  );
  const { nextStep } = useWizard();

  const handleChange = (index: number) => {
    const updatedCheckedState = checkedState.map((item, idx) =>
      idx === index ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  const handleClick = () => {
    nextStep();
  };

  return (
    <Section
      body={
        <>
          <Title value="Which account do you want to pay from?" />
          <AccountData>
            <>
              <AccountTitle>Account Name: {data.name}</AccountTitle>
              {data.accounts.map((account, index) => {
                const currency = account.currency === "ngn" ? "₦" : "$";
                return (
                  <Tile checked={checkedState[index]}>
                    <div>
                      <div>{account.name}</div>
                      <div>
                        {currency} {account.balance}
                      </div>
                    </div>
                    <Checkbox
                      name={account.name}
                      checked={checkedState[index]}
                      onChange={() => handleChange(index)}
                    />
                  </Tile>
                );
              })}
            </>
          </AccountData>
        </>
      }
      footer={<Button onClick={handleClick}>Pay ₦1,000 + NIP Charges</Button>}
    />
  );
}

export default Account;
