import * as React from 'react';
import { SelectValue } from 'antd/lib/select';
import Wallet from 'src/models/wallet';
import {
  Button,
  Input, Select, SelectOption,
} from 'src/components';
import './index.scss';
import WebJSAccount from '../../../models/webJSAccount';

type Props = {
  wallet: Wallet,
}

const TOKENS = [
  {
    id: '1234',
    name: 'Bitcoin',
    symbol: 'pBTC',
    pDecimals: 9,
  },
  {
    id: '12345',
    name: 'Tether',
    symbol: 'pUSDT',
    pDecimals: 9,
  },
];

const SendToken:React.FunctionComponent<Props> = ({
  wallet,
}) => {
  const [token, setToken] = React.useState<string>('');
  const [account, setAccount] = React.useState<WebJSAccount | null>(null);

  React.useEffect(() => {
    wallet.listAccount()
      .then((accounts) => {
        setAccount(accounts[0]);
      });
  }, []);

  const handleSend = () => {

  };

  const handleChangeToken = (value: SelectValue) => {
    setToken(value.toString());
  };

  console.debug('ACCOUNT', account);

  return (
    <div>
      <div>
        <label htmlFor="amount">How much do you want to send?</label>
        <div>
          <Input placeholder="amount" />
          <Select
            showSearch
            onChange={handleChangeToken}
            value={token}
          >
            {TOKENS.map((item) => (
              <SelectOption value={item.id}>{item.symbol}</SelectOption>
            ))}
          </Select>
        </div>
      </div>
      <Button onClick={handleSend}>Send</Button>
    </div>
  );
};

export default React.memo(SendToken);
