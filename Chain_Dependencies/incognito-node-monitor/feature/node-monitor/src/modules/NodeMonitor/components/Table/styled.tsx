import styled, { ITheme } from 'styled-components';

export const Styled = styled.div`
    .card {
        height: 100%;
        overflow: auto;
    }
    .table-cell {
        min-width: 100px;
        :hover {
            background-color: ${({ theme }: { theme: ITheme }) => theme.hoverRow};
        }
    }
    .dark-row {
        background-color: ${({ theme }: { theme: ITheme }) => theme.darkRow};
    }
    .table-row {
        cursor: pointer;
        :hover {
            background-color: ${({ theme }: { theme: ITheme }) => theme.hoverRow};
        }
        > td {
            text-align: center;
            line-break: anywhere;
            max-width: 200px;
        }
    }
    .header-row {
        background-color: ${({ theme }: { theme: ITheme }) => theme.headerRow};
        th {
            font-weight: bold;
            text-align: center;
        }
    }
    .wrap-loading {
        height: 100px;
    }
    .pagination {
        padding-left: 0;
        position: absolute;
        right: 15px;
    }
    .break-line {
        white-space: pre;
    }
`;

export const ModalWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
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
