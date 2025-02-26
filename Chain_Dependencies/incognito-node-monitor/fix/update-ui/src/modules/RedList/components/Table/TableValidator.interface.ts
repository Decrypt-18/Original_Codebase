import { ITableData } from 'src/modules/NodeMonitor/components/Table/Table.interface';

export interface ITableValidatorReducer {
    currentPage: number;
    rowsPerPage: number;
    limitPage: number;
    data: ITableData[];
    fetching: boolean;
    visibleModal: boolean;
}
