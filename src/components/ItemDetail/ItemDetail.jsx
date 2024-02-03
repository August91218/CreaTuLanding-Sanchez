import React from 'react'
import './ItemDetail.css'
import ItemCount from './ItemCount'
const ItemDetail = ({ name, image, price, stock, description }) => {
    return (
        image ?<>
            <div className="card-detail">
                <img src={image} alt="Product Image" className='img'/>
                <div className="detail">
                    <div className="name">{name}</div>
                    <p className="price">${price}</p>
                    <span className="stock">Stock: {stock}</span>
                    <p>{description}</p>
                    <ItemCount stock={stock}/>
                </div>
            </div>
        </>:<h4>Cargando...</h4> 
    )
}
export default ItemDetail
