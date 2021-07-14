import React from "react";
import { ReactComponent as Trophy } from "../../icons/trophy.svg";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import "./Success.css";

function Success(props) {
  return (
    <ContentWrapper className="success-wrapper">
      <h2 className="success-title">Success!</h2>
      <p className="success-icon">
        <Trophy />
      </p>
    </ContentWrapper>
  );
}

export default Success;
