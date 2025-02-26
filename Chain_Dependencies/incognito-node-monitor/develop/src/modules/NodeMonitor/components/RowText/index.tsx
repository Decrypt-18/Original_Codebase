import React, { memo } from 'react';
import { TextMedium, TextRegular } from 'src/components';
import styled from 'styled-components';
import Row from 'src/components/Row';

const Wrapper = styled(Row)`
    display: inline-flex;
    justify-content: space-between;
    margin-top: 11px;
    div:last-child {
        line-break: anywhere;
    }
`;

interface IProps {
    title: string;
    content?: string;
    rightComponent?: any;
}

const RowText = (props: IProps) => {
    const { title, content, rightComponent } = props;
    return (
        <Wrapper>
            <TextMedium fontSize={15}>{title}</TextMedium>
            {rightComponent || (
                <TextRegular fontSize={15} ml="8px" color="text4">
                    {content}
                </TextRegular>
            )}
        </Wrapper>
    );
};

export default memo(RowText);
