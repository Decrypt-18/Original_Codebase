import React, { memo } from 'react';
import { Wrapper, WrapLink, StyledNavLink } from './styled';

const SelectionTable = () => {
    return (
        <Wrapper>
            <WrapLink>
                <StyledNavLink id="stake-nav-link" to="/node-monitor">
                    My nodes
                </StyledNavLink>
                <StyledNavLink id="stake-nav-1" to="/red-list">
                    Inactive nodes
                </StyledNavLink>
            </WrapLink>
        </Wrapper>
    );
};

export default memo(SelectionTable);
