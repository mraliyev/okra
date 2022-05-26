import React from "react";
import styled from "styled-components";

export interface BankInterface {
  id?: string;
  name: string;
  icon: string;
  onClick?: () => void;
}

const BankItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  list-style: none;
  margin-bottom: 24px;
  cursor: pointer;
`;

const Icon = styled.div`
  height: 32px;
  width: 32px;

  > img {
    width: 100%;
    height: 100%;
    border-radius: 18px;
  }
`;

function Bank({ name, icon, onClick }: BankInterface) {
  return (
    <BankItem onClick={onClick}>
      <Icon>
        <img src={icon} alt="" />
      </Icon>
      {name}
    </BankItem>
  );
}

export default Bank;
