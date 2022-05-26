import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Bank, { BankInterface } from "./Bank";
import { useWizard } from "react-use-wizard";
import Title from "../Header/Title";

const Banks = styled.ul`
  margin-top: 10px;
  width: 100%;
  height: 75%;
  overflow-y: auto;
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  border: 1px solid #dcdede;
  box-shadow: 0px 4px 8px rgba(57, 83, 123, 0.08);
  border-radius: 6px;
  padding: 6px 16px;
  margin-top: 8px;
  margin-bottom: 32px;
  box-sizing: border-box;
`;

function BankList() {
  const [banks, setBanks] = useState<BankInterface[]>([]);
  const [inputValue, setInputValue] = useState("");
  const allBanks = useRef<BankInterface[]>([]);
  const { nextStep } = useWizard();

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value.toLowerCase();

  //   console.log({ value });

  //   if (value !== "") {
  //     const filteredBanks = banks.filter((bank) =>
  //       bank.name.toLowerCase().includes(value)
  //     );
  //     setBanks(filteredBanks);
  //   } else {
  //     setBanks(banks);
  //   }
  // };

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.toLowerCase();

      if (value !== "") {
        const filteredBanks = banks.filter((bank) =>
          bank.name.toLowerCase().includes(value)
        );
        setBanks(filteredBanks);
      } else {
        setBanks(allBanks.current);
      }

      setInputValue(value);
    },
    [banks]
  );

  useEffect(() => {
    async function getBanks(url: string) {
      const data = await fetch(url);
      const jsonData = await data.json();
      const banks = jsonData.data.banks;
      setBanks(banks);
      allBanks.current = banks;
    }
    getBanks(process.env.REACT_APP_BANKS_ENDPOINT as string);
  }, []);

  return (
    <>
      <Title value="What bank do you use?" />
      <Input placeholder="Search…" onChange={handleChange} value={inputValue} />
      <Banks>
        {banks.map((bank) => (
          <Bank
            key={bank.id}
            icon={bank.icon}
            name={bank.name}
            onClick={() => nextStep()}
          />
        ))}
      </Banks>
    </>
  );
}

export default BankList;
