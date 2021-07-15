import React from 'react';
import './Title.scss';

function Title({children}) {
    return (
        <span className="title">
            {children}
        </span>
    )
}

export default Title
