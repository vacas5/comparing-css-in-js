import React from "react";
import PropTypes from "prop-types";
import styles from "./ControlWithLabel.module.css";

ControlWithLabel.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  required: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

function ControlWithLabel({ id, title, invalid, required, children }) {
  const className =
    required && invalid
      ? `${styles.control} ${styles.invalid}`
      : styles.control;
  return (
    <div className={styles["responsive-field-wrapper"]}>
      <label htmlFor={id}>
        {title}
        {required && <span className={styles.required}>*</span>}
      </label>
      <div className={styles["control-wrapper"]}>
        {React.cloneElement(children, { id, className })}
        {required && invalid && (
          <p className={styles.help}>{title} is required.</p>
        )}
      </div>
    </div>
  );
}

export default ControlWithLabel;
