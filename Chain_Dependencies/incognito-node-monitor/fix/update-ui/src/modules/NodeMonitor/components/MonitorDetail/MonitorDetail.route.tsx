import { lazy } from 'react';
import { IRouteProps } from 'src/modules';

const monitorRoute: IRouteProps = {
    path: '/monitor-detail',
    exact: true,
    component: lazy(() => import('./MonitorDetail')),
    name: 'MonitorDetail',
    to: '/monitor-detail',
};

export const route = '/monitor-detail';

export default monitorRoute;
