import React from 'react';
import styled from 'styled-components';
import Row from 'src/components/Row';
import { AppLogo } from 'src/components/Icons';
import { TextBold } from 'src/components';
import { useSelector } from 'react-redux';
import { appTranslateSelector } from 'src/configs';
import { getMiningPublicKey } from 'src/modules/NodeMonitor/components/Table/Table.utils';

const HeaderFrame = styled(Row)`
    justify-content: space-between;
    padding: 30px 30px 0 30px;
    ${({ theme }) => theme.mediaWidth.upToSmall`
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    `}
`;

const WrapLogo = styled(Row)`
    cursor: pointer;
    width: fit-content;
`;

const Header = React.memo(() => {
    const appTranslate = useSelector(appTranslateSelector);
    if (getMiningPublicKey()) return null;
    return (
        <HeaderFrame>
            <WrapLogo>
                <AppLogo />
                <TextBold fontSize={20} marginLeft={10}>
                    {appTranslate.company}
                </TextBold>
            </WrapLogo>
        </HeaderFrame>
    );
});

export default Header;
