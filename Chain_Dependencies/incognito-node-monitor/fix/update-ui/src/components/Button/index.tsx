import React from 'react';
import styled from 'styled-components';

interface IProps {
    customContent?: React.ElementType;
    title: string;
    disabled?: boolean;
    loading?: boolean;
}

const Styled = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    font-size: 14px;
    height: 37px;
    margin: auto;
    padding: 0 11px;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.black};
    width: 100%;
    cursor: pointer;
    &.btn-disabled {
        background: ${({ theme }) => theme.gray1};
        color: ${({ theme }) => theme.text4};
    }
    .loading {
        position: absolute;
        right: 20%;
    }
`;

const Button = (props: IProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { customContent, title, disabled, className = '', ...rest } = props;
    return (
        <Styled
            className={`btn-container ${disabled ? 'btn-disabled' : ''}  ${className}`}
            disabled={disabled}
            {...rest}
        >
            {customContent || title}
        </Styled>
    );
};

export default Button;
