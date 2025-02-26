import * as React from "react";
import { Styled } from "./styled";
import Helmet from "react-helmet";
import { useSelector } from "react-redux";
import { translateSelector, II18n } from "src/i18n";
import Header from "src/components/Header/header.v1";
import Accounts from "src/containers/Accounts";

interface IProps {}

const Settings = (props: IProps) => {
  const { settings }: II18n = useSelector(translateSelector);
  return (
    <Styled className="settings">
      <Helmet title={settings.helmet} />
      <Header />
      <Accounts />
    </Styled>
  );
};

export default React.memo(Settings);
