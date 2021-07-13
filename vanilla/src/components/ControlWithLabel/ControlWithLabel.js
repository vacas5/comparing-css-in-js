import React from "react";
import PropTypes from "prop-types";
import "./ControlWithLabel.css";

ControlWithLabel.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  required: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

function ControlWithLabel({ id, title, invalid, required, children }) {
  const className = required && invalid ? "control invalid" : "control";
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
    </div>
  );
}

export default ControlWithLabel;
