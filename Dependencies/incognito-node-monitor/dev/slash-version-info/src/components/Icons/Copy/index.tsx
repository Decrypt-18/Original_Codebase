import * as React from 'react';
import copy from 'copy-to-clipboard';
import { useDispatch } from 'react-redux';
import { actionShowTooltip } from 'src/modules/Tooltip';
import { isEmpty } from 'lodash';

interface IProps {
    value: string;
    onCopy: () => void;
}

const CopyIcon = (props: any) => {
    return (
        <svg width={20} height={20} {...props}>
            <path
                d="M16.43 19.111c1.9 0 2.892-.984 2.892-2.865V7.272c0-1.88-.993-2.865-2.891-2.865h-1.494V3.09c0-1.881-.994-2.865-2.892-2.865H3.133C1.226.224.24 1.208.24 3.089v8.965c0 1.89.985 2.865 2.892 2.865h1.494v1.327c0 1.881.993 2.865 2.892 2.865h8.912zM4.628 13.17h-1.38c-.809 0-1.257-.422-1.257-1.274V3.247c0-.852.448-1.266 1.257-1.266h8.684c.8 0 1.257.414 1.257 1.266v1.16h-5.67c-1.898 0-2.891.985-2.891 2.865v5.898zm11.69 4.184H7.632c-.809 0-1.248-.422-1.248-1.266V7.43c0-.844.44-1.266 1.248-1.266h8.683c.809 0 1.257.422 1.257 1.266v8.657c0 .844-.448 1.266-1.257 1.266z"
                fill="#8A8A8E"
                fillRule="nonzero"
            />
        </svg>
    );
};

const Copy = (props: IProps & any) => {
    const { value, onCopy } = props;
    const dispatch = useDispatch();
    const iconRef: any = React.useRef();

    const handleCopy = () => {
        onCopy && onCopy();
        if (!isEmpty(value)) {
            copy(value || '');
        }
        dispatch(
            actionShowTooltip({
                id: 'copy',
                text: 'Copied',
                ref: iconRef ? iconRef.current : null,
                timeout: 1,
            }),
        );
    };

    return (
        <button type="button" className="button-copy" {...props} onClick={handleCopy} ref={iconRef}>
            <CopyIcon {...props} />
        </button>
    );
};

const MemoCopy = React.memo(Copy);
export default MemoCopy;
