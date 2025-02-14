import { lazy } from 'react';
import { IRouteProps } from 'src/modules';

const nodeMonitorRoute: IRouteProps = {
    path: '/red-list',
    exact: true,
    component: lazy(() => import('./RedList')),
    name: 'RedList',
    to: '/red-list',
};

export const route = '/red-list';

export default nodeMonitorRoute;
