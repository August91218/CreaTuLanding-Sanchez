import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom';
const Item = ({ id, name, image, price, stock, description, categoria }) => {
  return (
    <>
      <div className='card-content'>
        <img src={image} alt="" className='card-img' />
        <span className='item-name'>{name}</span>
        <span className='item-price'>${price}</span>
        <Link to={`/product/${id}`} className='buy'>Mas Información</Link>
      </div>

    </>
  )
}

export default Item;
