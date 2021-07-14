/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";
import { ReactComponent as Trophy } from "../../icons/trophy.svg";
import ContentWrapper from "../ContentWrapper/ContentWrapper";

const GREEN = "#97C05C";

const wrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const icon = css`
  svg {
    color: ${GREEN};
    width: 64px;
    height: 64px;
  }
`;

function Success() {
  return (
    <ContentWrapper css={wrapper}>
      <h2 css={{ color: GREEN }}>Success!</h2>
      <p css={icon}>
        <Trophy />
      </p>
    </ContentWrapper>
  );
}

export default Success;
