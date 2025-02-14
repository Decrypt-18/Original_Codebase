import styled from 'styled-components';
import { Text, TextProps } from 'rebass';
import { Colors } from 'src/theme/Theme.styled';
import React from 'react';

const TextWrapper = styled(Text)<{ color: keyof Colors }>`
    color: ${({ color, theme }) => (theme as any)[color]};
`;

export const TextRegular = (props: TextProps) => (
    <TextWrapper fontSize={15} fontWeight={400} color="text1" {...props} />
);

export const TextMedium = (props: TextProps) => <TextWrapper fontSize={15} fontWeight={500} color="text1" {...props} />;

export const TextBold = (props: TextProps) => <TextWrapper fontSize={15} fontWeight={700} color="text1" {...props} />;
