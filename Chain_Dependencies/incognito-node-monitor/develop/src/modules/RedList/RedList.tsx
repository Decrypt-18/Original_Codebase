import React from 'react';
import Table from 'src/modules/RedList/components/Table';
import styled from 'styled-components';

const Wrapper = styled.div``;

const RedList = React.memo(() => {
    return (
        <Wrapper>
            <Table />
        </Wrapper>
    );
});

export default RedList;
