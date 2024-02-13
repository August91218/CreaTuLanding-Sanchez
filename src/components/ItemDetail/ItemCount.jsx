import React, { useState } from 'react'
import "./itemCount.css"
import { Link } from 'react-router-dom'
const ItemCount = ({ stock }) => {
    const [count, setCount] = useState(0)

    function add(event) {
        if (count >= stock) {
            event.preventdefault()

        } else {
            setCount(count + 1)
        }
    }
    function res(value) {
        if (count <= 0) {
            setCount(0);
        } else {
            setCount(count - 1)

        }
    }
    return (
        <>
            <div className="buy-count">
                <button className="btn" onClick={res}>-</button>
                <span className='info'>{count}</span>
                <button className="btn" onClick={add}>+</button>
            </div>
            <br />
            <Link to='/checkout' className='buy-btn'>Agregar al carrito</Link>
        </>
    )
}
export default ItemCount
