import React from "react";
import { ReactComponent as Trophy } from "../../icons/trophy.svg";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import css from "styled-jsx/macro";

const { className: successWrapper, styles } = css.resolve`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GREEN = "green";

function Success() {
  return (
    <ContentWrapper className={successWrapper}>
      <h2 className="success-title">Success!</h2>
      <p className="success-icon">
        <Trophy />
      </p>
      {styles}
      <style jsx>{`
        .success-title {
          color: ${GREEN};
        }

        .success-icon :global(svg) {
          color: ${GREEN};
          width: 64px;
          height: 64px;
        }
      `}</style>
    </ContentWrapper>
  );
}

export default Success;
