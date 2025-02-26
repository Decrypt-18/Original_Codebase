import * as React from 'react';
import Header from 'src/components/Header';

import styles from './index.module.scss';
import Feature from './Feature';
import SendCrypto from '../SendCrypto';

type Props = {
  loading: boolean,
  creating: boolean,
  loadWallet: Function,
  wallet: any,
}

const features = [
  {
    label: 'Shield',
    desc: 'Shield your crypto',
    onClick: () => null,
  },
  {
    label: 'Send',
    desc: 'Send anonymously',
    onClick: () => null,
  },
  {
    label: 'Receive',
    desc: 'Receive anonymously',
    onClick: () => null,
  },
];

const Landing: React.FunctionComponent<Props> = () => (
  <div className={styles.landing}>
    <Header />
    <h1 className={styles.title}>Go incognito</h1>
    <h4 className={styles.desc}>
      A privacy-first alternative for all your crypto activities. Watch how it works
    </h4>
    <div className={styles.features}>
      {features.map((item) => (
        <Feature
          key={item.label}
          label={item.label}
          desc={item.desc}
          onClick={item.onClick}
        />
      ))}
      <SendCrypto visible />
    </div>
  </div>
);

export default React.memo(Landing);
