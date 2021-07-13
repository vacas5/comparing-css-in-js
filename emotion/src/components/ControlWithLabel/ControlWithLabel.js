/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react/macro";
import PropTypes from "prop-types";

ControlWithLabel.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  required: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

const RED = "#D63964";

const wrapper = css`
  margin-top: 16px;

  @media (min-width: 640px) {
    display: flex;
    justify-content: flex-end;
  }
`;

const invalidControl = css`
  input,
  select,
  textarea {
    border-color: ${RED};
  }
`;

const controlWrapper = css`
  margin-top: 4px;

  @media (min-width: 640px) {
    margin: 0 0 0 24px;
    width: 75%;
  }

  input,
  select,
  textarea {
    display: block;
    width: 100%;
  }
`;

const helpClass = css`
  font-size: 14px;
  margin: 8px 0 0;
  color: ${RED};
`;

function ControlWithLabel({ id, title, invalid, required, children }) {
  const controlWrapperClass = [controlWrapper];

  if (required && invalid) {
    controlWrapperClass.push(invalidControl);
  }

  return (
    <div css={wrapper}>
      <label htmlFor={id} css={{ display: "block" }}>
        {title}
        {required && <span css={{ color: RED }}>*</span>}
      </label>
      <div css={controlWrapperClass}>
        {React.cloneElement(children, { id })}
        {required && invalid && <p css={helpClass}>{title} is required.</p>}
      </div>
    </div>
  );
}

export default ControlWithLabel;
