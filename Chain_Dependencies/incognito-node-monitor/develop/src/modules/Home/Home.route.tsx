import { lazy } from 'react';
import { IRouteProps } from 'src/modules';

const nodeMonitorRoute: IRouteProps = {
    path: '/',
    exact: true,
    component: lazy(() => import('src/modules/Home')),
    name: 'Home',
    to: '/',
};

export const route = '/';

export default nodeMonitorRoute;
