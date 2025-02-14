import React, { memo } from 'react';
import styled, { ITheme } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { listNodeSelector } from 'src/modules/NodeMonitor/components/Table/Table.selector';
import { actionSubmitSearch } from 'src/modules/NodeMonitor/components/Table/Table.actions';
import Row from 'src/components/Row';
import Button from 'src/components/Button';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { isEmpty } from 'lodash';

function Alert(props: any) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Wrapper = styled(Row)`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 50px;
    margin-top: 30px;
    ${({ theme }) => theme.mediaWidth.upToSmall`
        flex-direction: column;
        margin-bottom: 20px;
        margin-top: 0px;
    `}
    .btn-container {
        width: 120px;
        ${({ theme }) => theme.mediaWidth.upToSmall`
            margin: 12px 0;
        `}
    }
`;

const WrapperInput = styled(Row)`
    ${({ theme }) => theme.mediaWidth.upToSmall`
        flex-direction: column;
    `}
    input {
        height: 40px;
        border: 1px solid ${({ theme }: { theme: ITheme }) => theme.border1};
        border-radius: 8px;
        padding: 10px;
        color: ${({ theme }: { theme: ITheme }) => theme.text1};
        font-size: 14px;
        line-height: 21px;
    }
    .inputName {
        flex-basis: 20%;
        ${({ theme }) => theme.mediaWidth.upToSmall`
          width: inherit;
        `}
    }
    .inputMiningKey {
        margin: 0 30px;
        flex-basis: 80%;
        ${({ theme }) => theme.mediaWidth.upToSmall`
            width: inherit;
            margin-left: 0;
            margin-right: 0;
            margin-top: 10px;
        `}
    }
`;

const SearchRow = () => {
    const dispatch = useDispatch();
    const listNode = useSelector(listNodeSelector);
    const [open, setOpen] = React.useState(false);
    const [nodeName, setNodeName] = React.useState('');
    const [miningKey, setMiningKey] = React.useState('');

    const onChangeName = React.useCallback((e) => {
        if (!e || !e.target) return;
        const { value } = e.target;
        setNodeName(value);
    }, []);

    const onChangeMiningKey = React.useCallback((e) => {
        if (!e || !e.target) return;
        const { value } = e.target;
        setMiningKey(value);
    }, []);

    const onSubmitPress = () => {
        const hasNode =
            listNode.some((node) => node.name === nodeName || node.publicKey === miningKey) ||
            isEmpty(nodeName) ||
            isEmpty(miningKey);
        if (hasNode) {
            setOpen(true);
            return setTimeout(() => {
                setOpen(false);
            }, 2000);
        }

        const newListNode = [
            {
                name: nodeName,
                publicKey: miningKey,
            },
        ].concat(listNode);
        dispatch(actionSubmitSearch(newListNode));
    };

    return (
        <Wrapper>
            <WrapperInput>
                <input className="inputName" placeholder="Node name" onChange={onChangeName} />
                <input
                    className="inputMiningKey"
                    placeholder="Enter public key associated with your node"
                    onChange={onChangeMiningKey}
                />
            </WrapperInput>
            <Button title="Check" disabled={isEmpty(nodeName) || isEmpty(miningKey)} onClick={onSubmitPress} />
            <Snackbar open={open}>
                <Alert
                    onClose={() => {
                        setOpen(false);
                    }}
                    severity="error"
                >
                    The node name or validate public key is exist!
                </Alert>
            </Snackbar>
        </Wrapper>
    );
};

export default memo(SearchRow);
