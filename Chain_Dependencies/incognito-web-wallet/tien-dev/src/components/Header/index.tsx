import * as React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';

import styles from './index.module.scss';

const Header:React.FunctionComponent = () => (
  <div className={styles.header}>
    <div className={styles.left} />
    <div className={styles.center} />
    <div className={styles.right}>
      <Link to="/wallet">
        <Icon className={styles.icon} type="wallet" />
      </Link>
    </div>
  </div>
);

export default Header;
