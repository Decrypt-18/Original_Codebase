import React, { memo } from 'react';
import Modal from 'src/components/Modal';
import { CloseWrapper, ModalWrapper } from 'src/modules/NodeMonitor/components/Table/styled';
import { CloseIcon } from 'src/components/Icons';
import MonitorDetail from 'src/modules/NodeMonitor/components/MonitorDetail';

interface IProps {
    visible: boolean;
    onClose: () => void;
}

const MonitorDetailModal = ({ visible, onClose }: IProps) => {
    return (
        <Modal isOpen={visible} onDismiss={onClose}>
            <ModalWrapper>
                <CloseWrapper onClick={onClose}>
                    <CloseIcon width="18" height="18" />
                </CloseWrapper>
                <MonitorDetail />
            </ModalWrapper>
        </Modal>
    );
};

export default memo(MonitorDetailModal);
