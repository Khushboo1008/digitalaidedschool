import React from 'react'
import { Link } from 'react-router-dom'
import './Button.scss'

function Button({children, to="#", style, onClick}) {
    return (
        <Link to={to} onClick={onClick} style={style} className="link__btn">
           {children} 
        </Link>
    )
}

export default Button
