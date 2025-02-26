import { lazy } from 'react';
import { IRouteProps } from 'src/modules';

const nodeMonitorRoute: IRouteProps = {
    path: '/node-monitor',
    exact: true,
    component: lazy(() => import('./NodeMonitor')),
    name: 'NodeMonitor',
    to: '/node-monitor',
};

export const route = '/node-monitor';

export default nodeMonitorRoute;
