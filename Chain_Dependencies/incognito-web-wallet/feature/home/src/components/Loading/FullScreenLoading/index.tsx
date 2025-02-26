import * as React from 'react'
import { Spin } from 'antd';
import './index.scss';

const FullScreenLoading:React.FunctionComponent = () => (
  <div className="full-screen-loading">
    <Spin tip="Loading..." />
  </div>
);

export default FullScreenLoading;
