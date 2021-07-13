/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";
import PropTypes from "prop-types";

ContentWrapper.propTypes = {
  className: PropTypes.string,
};

const wrapper = css`
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
    <main css={wrapper} className={className ? className : ""}>
      {children}
    </main>
  );
}

export default ContentWrapper;
