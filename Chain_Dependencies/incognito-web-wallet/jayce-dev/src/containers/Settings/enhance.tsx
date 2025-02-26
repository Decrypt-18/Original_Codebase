import * as React from "react";
import { compose } from "recompose";

interface IProps {}

const enhance = (WrappedComponent: React.FunctionComponent) => (props: IProps) => {
  return <WrappedComponent {...props} />;
};

export default compose<any, any>(enhance);
