import React from 'react';
import { Modal } from 'antd';
import { ModalProps } from 'antd/lib/modal';

const BaseModal:React.FunctionComponent<ModalProps> = ({
  title,
  visible,
  onOk,
  onCancel,
  footer,
  children,
}) => (
  <Modal
    title={title}
    visible={visible}
    onOk={onOk}
    onCancel={onCancel}
    footer={footer}
  >
    {children}
  </Modal>
);

export default BaseModal;
