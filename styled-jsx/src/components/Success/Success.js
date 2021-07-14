import React from "react";
import { ReactComponent as Trophy } from "../../icons/trophy.svg";
import ContentWrapper from "../ContentWrapper/ContentWrapper";

const GREEN = "green";

function Success() {
  return (
    <ContentWrapper className="success-wrapper">
      <h2 className="success-title">Success!</h2>
      <p className="success-icon">
        <Trophy />
      </p>
      <style jsx>{`
        .success-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .success-title {
          color: ${GREEN};
        }

        .success-icon svg {
          color: ${GREEN};
          width: 64px;
          height: 64px;
        }
      `}</style>
    </ContentWrapper>
  );
}

export default Success;
