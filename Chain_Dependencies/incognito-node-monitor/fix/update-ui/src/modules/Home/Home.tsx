import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import { route as nodeMonitorRoute } from 'src/modules/NodeMonitor/NodeMonitor.route';

const Home = () => {
    const history = useHistory();
    React.useEffect(() => {
        history.push(nodeMonitorRoute);
    }, []);
    return <div />;
};

export default memo(Home);
