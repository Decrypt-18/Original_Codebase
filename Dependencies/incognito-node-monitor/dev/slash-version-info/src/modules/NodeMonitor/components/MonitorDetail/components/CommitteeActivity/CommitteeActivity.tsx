import React from 'react';
import { useSelector } from 'react-redux';
import { monitorDetailSelector } from 'src/modules/NodeMonitor/components/MonitorDetail/MonitorDetail.selector';
import { isEmpty } from 'lodash';
import AntdTable from 'src/components/Table/AntdTable';
import { COLUMN_TABLE_COMMITTEE_ACTIVITY } from 'src/modules/NodeMonitor/NodeMonitor.data';

const CommitteeActivity = React.memo(() => {
    const { committee } = useSelector(monitorDetailSelector);
    if (isEmpty(committee)) return null;
    return <AntdTable columns={COLUMN_TABLE_COMMITTEE_ACTIVITY} data={committee} />;
});

export default CommitteeActivity;
