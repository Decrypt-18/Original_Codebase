import * as React from 'react';

interface Props {}

const Menu = (props: Props & any) => {
    return (
        <button type="button" className="menu-icon">
            <svg width={17} height={15} {...props}>
                <g fill="#000" fillRule="evenodd">
                    <path d="M.5 14h16a.5.5 0 110 1H.5a.5.5 0 110-1zM.5 7h16a.5.5 0 110 1H.5a.5.5 0 010-1zM.5 0h16a.5.5 0 110 1H.5a.5.5 0 110-1z" />
                </g>
            </svg>
        </button>
    );
};

const MemoMenu = React.memo(Menu);
export default MemoMenu;
