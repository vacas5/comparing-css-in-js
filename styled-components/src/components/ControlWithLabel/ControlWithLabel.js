import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

ControlWithLabel.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  required: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

const RED = "red";

const Wrapper = styled.div`
  margin-top: 16px;

  @media (min-width: 640px) {
    display: flex;
    justify-content: flex-end;
  }
`;

const Label = styled.label`
  display: block;
`;

const Asterisk = styled.span`
  color: ${RED};
`;

const ControlWrapper = styled.div`
  margin-top: 4px;
  display: block;
  width: 100%;

  input,
  textarea,
  select {
    display: block;
    width: 100%;
    border-color: ${(props) => props.invalid && RED};
  }

  @media (min-width: 640px) {
    margin: 0 0 0 24px;
    width: 75%;
  }
`;

const Help = styled.p`
  font-size: 14px;
  margin: 8px 0 0;
  color: red;
`;

function ControlWithLabel({ id, title, invalid, required, children }) {
  return (
    <Wrapper>
      <Label htmlFor={id}>
        {title}
        {required && <Asterisk>*</Asterisk>}
      </Label>
      <ControlWrapper invalid={required && invalid}>
        {React.cloneElement(children, { id })}
        {required && invalid && <Help>{title} is required.</Help>}
      </ControlWrapper>
    </Wrapper>
  );
}

export default ControlWithLabel;
