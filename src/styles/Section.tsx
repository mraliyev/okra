import React from "react";
import styled from "styled-components";

const CustomSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

interface SectionInterface {
  body: React.ReactNode;
  footer: React.ReactNode;
}

function Section({ body, footer }: SectionInterface) {
  return (
    <CustomSection>
      <section>{body}</section>
      <section>{footer}</section>
    </CustomSection>
  );
}

export default Section;
