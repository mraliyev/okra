import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: -0.2px;
  color: #222222;
`;

function Title({ value }: { value: string }) {
  return <Heading>{value}</Heading>;
}

export default Title;
