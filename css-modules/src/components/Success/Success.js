import React from "react";
import { ReactComponent as Trophy } from "../../icons/trophy.svg";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import styles from "./Success.module.css";

function Success() {
  return (
    <ContentWrapper className={styles["success-wrapper"]}>
      <h2 className={styles["success-title"]}>Success!</h2>
      <p className={styles["success-icon"]}>
        <Trophy />
      </p>
    </ContentWrapper>
  );
}

export default Success;
