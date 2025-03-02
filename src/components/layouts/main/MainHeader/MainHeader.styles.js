import { LAYOUT } from "../../../../styles/themes/constants";
import { media } from "../../../../styles/themes/constants";
import { Layout } from "antd";
import styled, { css } from "styled-components";

export const Header = styled(Layout.Header)`
  line-height: 1.5;
  height: 4.25rem;
  padding: 1rem;
  color: var(--text-main-color);
  background-color: var(--sider-background-color);

  @media only screen and ${media.md} {
    padding: ${LAYOUT.desktop.paddingVertical}
      ${LAYOUT.desktop.paddingHorizontal};
    height: ${LAYOUT.desktop.headerHeight};
  }

  @media only screen and ${media.md} {
    ${props =>
      props?.$isTwoColumnsLayoutHeader &&
      css`
        padding: 0;
      `}
  }
`;
