import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { IRouteProps } from 'src/modules';
import styled from 'styled-components';
import { getMiningPublicKey } from 'src/modules/NodeMonitor/components/Table/Table.utils';
import enhance from './MainRoute.enhance';
import { IProps } from './MainRoute.inteface';

const Styled = styled.div<{ isWebview: boolean }>`
    margin: ${({ isWebview }: { isWebview: boolean }) => (isWebview ? '3px' : '30px')};
`;

const MainRoute = (props: IProps & any) => {
    const { routes } = props;
    return (
        <Styled isWebview={!!getMiningPublicKey()}>
            <Switch>
                <Suspense fallback={null}>
                    {routes.map((route: IRouteProps) => (
                        <Route {...route} key={route.path} />
                    ))}
                </Suspense>
            </Switch>
        </Styled>
    );
};

export default enhance(React.memo(MainRoute));
