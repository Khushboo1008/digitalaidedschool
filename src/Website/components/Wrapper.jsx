import React from 'react';
import './Wrapper.scss';

function Wrapper({ children, className}) {
       
    return (
        <section className={`section__wrapper ${className}`}>
            {children}
        </section>
    )
}

export default Wrapper
