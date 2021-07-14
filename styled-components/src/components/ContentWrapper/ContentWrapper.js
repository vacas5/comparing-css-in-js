import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

ContentWrapper.propTypes = {
  className: PropTypes.string,
};

const ActualContentWrapper = styled.main`
  background: white;
  margin: 24px -24px 0;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  min-height: 400px;

  @media (min-width: 768px) {
    border-radius: 4px;
    overflow: hidden;
    width: 680px;
    margin: 24px auto;
  }
`;

function ContentWrapper({ className, children }) {
  return (
    <ActualContentWrapper className={className}>
      {children}
    </ActualContentWrapper>
  );
}

ContentWrapper.defaultProps = {
  className: "",
};

export default ContentWrapper;
