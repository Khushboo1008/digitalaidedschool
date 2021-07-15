import React from 'react';
import './Wrapper.scss';

function Wrapper({ children, al = "center", js = "center", dir = "row" }) {
    
    const style = {
        display: "flex",
        alignItems: al,
        justifyContent: js,
        flexDirection: dir
    }
    return (
        <section style={style} className="section__wrapper">
            {children}
        </section>
    )
}

export default Wrapper
