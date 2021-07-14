import React from "react";
import PropTypes from "prop-types";
import styles from "./ContentWrapper.module.css";

ContentWrapper.propTypes = {
  className: PropTypes.string,
};

function ContentWrapper({ className, children }) {
  return (
    <main
      className={
        className
          ? `${styles["content-wrapper"]} ${className}`
          : styles["content-wrapper"]
      }
    >
      {children}
    </main>
  );
}

export default ContentWrapper;
