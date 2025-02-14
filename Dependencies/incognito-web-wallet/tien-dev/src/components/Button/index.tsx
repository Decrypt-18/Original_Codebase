import React from 'react';
import { Button as ButtonComponent } from 'antd';
import { ButtonProps } from 'antd/lib/button';

const Button:React.FunctionComponent<ButtonProps> = ({
  type,
  disabled,
  onClick,
  children,
}) => (
  <ButtonComponent
    disabled={disabled}
    onClick={onClick}
    type={type}
  >
    {children}
  </ButtonComponent>
);

export default Button;
