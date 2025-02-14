import * as React from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import { ArrowRight } from "src/components/Icons";

const NavStyled = styled.div`
  &.navs {
    display: flex;
    align-items: center;
    .nav-link {
      text-transform: capitalize;
      color: #aaa;
      font-weight: normal;
      font-size: 20px;
      line-height: 24px;
      &.actived {
        color: #fff;
      }
    }
    .arrow-right {
      vertical-align: none;
      border-style: none;
      margin: 0 1%;
    }
  }
`;

const extractPath = (pathname: string) =>
  pathname.split("/").map(
    (url: string, index: string | number, arr: any[]) =>
      url.length > 0 && (
        <React.Fragment key={index}>
          <Link
            to={`/${url}`}
            className={`nav-link ${index === arr.length - 1 ? "actived" : ""}`}
          >
            {url}
          </Link>
          {index < arr.length - 1 && <ArrowRight />}
        </React.Fragment>
      )
  );

const Nav = (props: any) => {
  return (
    <NavStyled className="navs">
      {extractPath(props.location.pathname)}
    </NavStyled>
  );
};

export default withRouter(Nav);
