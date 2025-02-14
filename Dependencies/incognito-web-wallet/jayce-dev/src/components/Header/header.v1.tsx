import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logoSrc from "src/assets/images/incognito.svg";
import { II18n, translateSelector } from "src/i18n";
import { useSelector } from "react-redux";
const HeaderStyled = styled.div`
  &.header {
    background: #202123;
    padding: 1% 2%;
    display: flex;
    align-items: center;
    .logo-icon {
      width: 24px;
      height: 24px;
    }
    .label {
      color: #fff;
      font-size: 16px;
      line-height: 22px;
      font-weight: bold;
      margin: 0;
      padding: 0;
      padding-left: 20px;
    }
  }
`;

interface IProps {}

const Header = (props: IProps) => {
  const { header }: II18n = useSelector(translateSelector);
  return (
    <HeaderStyled className="header">
      <Link to="/" className="logo-icon">
        <img src={logoSrc} alt="logo-incognito" />
      </Link>
      <p className="label">{header.label}</p>
    </HeaderStyled>
  );
};

export default React.memo(Header);
