import React from "react";
import PropTypes from "prop-types";
import css from "styled-jsx/macro";

const RED = "red";

const { className: control, styles } = css.resolve`
  display: block;
  width: 100%;
  border-color: blue;
`;

const { className: invalidClass, styles: invalidStyles } = css.resolve`
  border-color: ${RED};
`;

ControlWithLabel.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  required: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

function ControlWithLabel({ id, title, invalid, required, children }) {
  const className =
    required && invalid ? `${invalidClass} ${control}` : control;
  return (
    <div className="responsive-field-wrapper">
      <label htmlFor={id}>
        {title}
        {required && <span className="required">*</span>}
      </label>
      <div className="control-wrapper">
        {React.cloneElement(children, { id, className })}
        {required && invalid && <p className="help">{title} is required.</p>}
      </div>
      {styles}
      {invalidStyles}
      <style jsx>
        {`
          .responsive-field-wrapper {
            margin-top: 16px;
          }

          .responsive-field-wrapper label {
            display: block;
          }

          .control-wrapper {
            margin-top: 4px;
            display: block;
            width: 100%;
          }

          .required {
            color: ${RED};
          }

          .help {
            font-size: 14px;
            margin: 8px 0 0;
            color: ${RED};
          }

          @media (min-width: 640px) {
            .responsive-field-wrapper {
              display: flex;
              justify-content: flex-end;
            }

            .control-wrapper {
              margin: 0 0 0 24px;
              width: 75%;
            }
          }
        `}
      </style>
    </div>
  );
}

export default ControlWithLabel;
