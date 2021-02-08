import React from 'react'
import './Box.css'

function Box(props) {
    return (
        <div className={props.boxStyle} >
            {props.id}
        </div>
    )
}

export default Box
