import styled, { ITheme } from 'styled-components';

export const Styled = styled.div`
    height: 100%;
    overflow: auto;
    .card {
        height: 100%;
        overflow: auto;
    }
    .row {
        text-align: center;
        font-weight: 600;
    }
    .table-row-light {
        background-color: ${({ theme }: { theme: ITheme }) => theme.lightRow};
    }
    .table-row-dark {
        background-color: ${({ theme }: { theme: ITheme }) => theme.darkRow};
    }
    thead > tr > th {
        text-align: center;
        font-weight: 600;
    }
`;

export const ModalWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    .header-row {
        width: 100%;
        justify-content: space-between;
        padding-left: 20px;
        align-items: center;
        margin-top: 15px;
        margin-bottom: 8px;
    }
`;

export const CloseWrapper = styled.div`
    width: 55px;
    align-self: flex-end;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-bottom: 5px;
    margin-top: 13px;
`;
