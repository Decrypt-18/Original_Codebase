import styled from 'styled-components';

export const Styled = styled.div<{ isWebview: boolean }>`
    overflow: auto;
    padding: ${({ isWebview }: { isWebview: boolean }) => (isWebview ? `3px` : `0 20px 20px 20px`)};
    > div {
        margin-top: 20px;
    }
    .wrap-loading {
        padding-bottom: 20px;
    }
`;
