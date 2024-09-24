import * as React from 'react';

const PlusSvgIcon = (props) => (
    <svg {...props} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect {...props} x="6" y="13" width="16" height="2" fill="#151515"/>
        <rect {...props} x="15" y="6" width="16" height="2" transform="rotate(90 15 6)" fill="#151515"/>
    </svg>
);

export default PlusSvgIcon;