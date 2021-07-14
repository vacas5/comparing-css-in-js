import React from "react";
import styled from "styled-components/macro";
import { ReactComponent as Trophy } from "../../icons/trophy.svg";
import ContentWrapper from "../ContentWrapper/ContentWrapper";

const GREEN = "green";

const SuccessWrapper = styled(ContentWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Create a Title component that'll render an <h2> tag with some styles
const Title = styled.h2`
  color: ${GREEN};
`;

const Icon = styled(Trophy)`
  color: ${GREEN};
  width: 64px;
  height: 64px;
`;

function Success() {
  return (
    <SuccessWrapper>
      <Title>Success!</Title>
      <p>
        <Icon />
      </p>
    </SuccessWrapper>
  );
}

export default Success;
