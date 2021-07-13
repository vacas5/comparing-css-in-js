import React from "react";
import PropTypes from "prop-types";

ContentWrapper.propTypes = {
  className: PropTypes.string,
};

function ContentWrapper({ className, children }) {
  return (
    <main
      className={className ? `content-wrapper ${className}` : "content-wrapper"}
    >
      {children}
    </main>
  );
}

export default ContentWrapper;
