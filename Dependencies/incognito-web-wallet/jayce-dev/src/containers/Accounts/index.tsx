import * as React from "react";
import { Styled } from "./styled";
import Nav from "src/components/Nav";
import { useSelector } from "react-redux";
import { translateSelector } from "src/i18n";
import importIcon from "src/assets/images/import.svg";
import createIcon from "src/assets/images/plus.svg";
import withAccounts from "./enhance";
import RenderAccounts from "./renderAccounts";

interface IProps {}

interface IPropsAction {
  title: string;
  srcIcon: string;
}

const Action = (props: IPropsAction) => {
  const { title, srcIcon } = props;
  return (
    <div className="action">
      <div className="icon">
        <img src={srcIcon} alt="" />
      </div>
      <p className="title">{title}</p>
    </div>
  );
};

const Accounts = (props: IProps) => {
  const { accounts } = useSelector(translateSelector);

  return (
    <Styled className="accounts">
      <div className="hook">
        <Nav />
        <div className="actions">
          <Action title={accounts.import} srcIcon={importIcon} />
          <Action title={accounts.create} srcIcon={createIcon} />
        </div>
      </div>
      <div className="extra">
        <RenderAccounts />
      </div>
    </Styled>
  );
};

export default React.memo(withAccounts(Accounts));
