import React, { useState } from 'react'
import Box from '../components/Box'
import Payment from '../components/Payment'
import '../components/Box.css'


function Cart() {
    const [items, setItems] = useState({
        activeItem: null,
        objects: [
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
            { id: 7 },
            { id: 8 },
            { id: 9 }
        ]
    })

    const [choice, setChoice] = useState({
        objects: [{ id: 10000 }, { id: 10000 }, { id: 10000 }, { id: 10000 }]
    })

    function setValue(index) {
        setChoice({
            ...choice,
            objects: [
                { id: (10000 * items.objects[index].id / 100) },
                { id: (10000 * items.objects[index].id / 100) + 1000 },
                { id: (10000 * items.objects[index].id / 100) + 2000 },
                { id: (10000 * items.objects[index].id / 100) + 3000 }]
        })

    }

    function toggleActive(index) {
        setItems({ ...items, activeItem: items.objects[index] })
    }

    function toggleActiveColor(index) {
        if (items.objects[index] === items.activeItem) {
            return "box clicked"
        } else {
            return "box unclicked"
        }
    }

    return (
        <div className="container">
            <h1>Cart</h1>
            <div className="row">
                <div className="col-lg-6">
                    <div className="row">
                        {items.objects.map((boxes, index) =>
                            <div
                                key={index}
                                className="col-4 d-flex justify-content-between"
                                onClick={() => {
                                    toggleActive(index)
                                    setValue(index)
                                }}>
                                <Box id={boxes.id} boxStyle={toggleActiveColor(index)} />
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-lg-6" >
                    {choice.objects.map((boxes, index) =>
                        <div onClick={() => toggleActive(index)}>
                            <Payment id={boxes.id} paymentStyle={toggleActiveColor(index)} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Cart
