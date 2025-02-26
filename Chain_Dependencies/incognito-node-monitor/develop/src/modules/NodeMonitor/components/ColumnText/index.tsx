import React, { memo } from 'react';
import { TextMedium, TextBold } from 'src/components';
import styled from 'styled-components';

const Styled = styled.div`
    div:last-child {
        line-break: anywhere;
    }
`;

interface IProps {
    title: string;
    content: string;
}

const ColumnText = (props: IProps) => {
    const { title, content } = props;
    return (
        <Styled>
            <TextBold fontSize={16}>{title}</TextBold>
            <TextMedium fontSize={16} mt={10} color="text2">
                {content}
            </TextMedium>
        </Styled>
    );
};

export default memo(ColumnText);
