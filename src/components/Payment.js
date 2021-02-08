import React from 'react'
import './Payment.css'

function Payment(props) {
    return (
        <div className={props.paymentStyle}>
            {props.id}
        </div>
    )
}

export default Payment
