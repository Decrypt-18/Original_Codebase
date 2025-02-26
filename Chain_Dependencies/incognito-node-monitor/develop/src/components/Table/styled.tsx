import styled, { ITheme } from 'styled-components';

export const Styled = styled.div`
    .card {
        overflow: auto;
    }
    .table-cell {
        min-width: 100px;
    }
    .dark-row {
        background-color: ${({ theme }: { theme: ITheme }) => theme.darkRow};
    }
    .table-row {
        cursor: pointer;
        > td {
            text-align: center;
        }
    }
    .header-row {
        background-color: ${({ theme }: { theme: ITheme }) => theme.headerRow};
        th {
            font-weight: bold;
            text-align: center;
        }
    }
`;
