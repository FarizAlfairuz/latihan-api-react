import React, { useState } from 'react'
import Box from '../components/Box'



function Cart() {
    const [items, setItems] = useState([
        100,200,300,400,500,600,700,800,900
    ])


    return (
        <div className="container">
            <h1>Cart</h1>
            <div className="row">
                <div className="col-4">
                    <Box id={items[0]} />
                </div>
            </div>
        </div>
    )
}

export default Cart
