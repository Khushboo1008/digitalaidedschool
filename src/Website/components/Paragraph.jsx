import React from 'react'
import './Paragraph.scss'

function Paragraph({data=[], className, style}) {
    return (
        <main style={style} className={`paragraph__container ${className}`}>
            {data.length && data.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <p className="paragraph">
                            {item.text}
                        </p>
                    </React.Fragment>
                )
            })}
        </main>
    )
}

export default Paragraph
