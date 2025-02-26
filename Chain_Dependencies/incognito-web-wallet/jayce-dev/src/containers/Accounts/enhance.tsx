import * as React from "react";
import { compose } from "recompose";
import { useSelector, useDispatch } from "react-redux";
import { accountsSelector } from "./selector";
import { ACTION_FETCH_ACCOUNTS } from "src/redux/actions/accounts";

interface IProps {}

const enhance = (WrappedComponent: any) => (props: IProps) => {
  const { isFetched } = useSelector(accountsSelector);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (!isFetched) {
      dispatch({
        type: ACTION_FETCH_ACCOUNTS
      });
    }
  }, []);
  return <WrappedComponent {...props} />;
};

export default compose<any, any>(enhance);
