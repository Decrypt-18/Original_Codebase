import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { IRouteProps } from 'src/modules';
import enhance from './MainRoute.enhance';
import { IProps } from './MainRoute.inteface';

const MainRoute = (props: IProps & any) => {
    const { routes } = props;
    return (
        <Switch>
            <Suspense fallback={null}>
                {routes.map((route: IRouteProps) => (
                    <Route {...route} key={route.path} />
                ))}
            </Suspense>
        </Switch>
    );
};

export default enhance(React.memo(MainRoute));
