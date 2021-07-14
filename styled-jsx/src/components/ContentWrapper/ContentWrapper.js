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
      <style jsx>{`
        .content-wrapper {
          background: white;
          margin: 24px -24px 0;
          box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
          min-height: 400px;
        }

        @media (min-width: 768px) {
          .content-wrapper {
            border-radius: 4px;
            overflow: hidden;
            width: 680px;
            margin: 24px auto;
          }
        }
      `}</style>
    </main>
  );
}

export default ContentWrapper;
