import React from 'react'
import './ItemDetail.css'
import ItemCount from './ItemCount'
const ItemDetail = ({ name, image, price, stock, description, categoria }) => {
    function agrandarPrimeraLetra(texto) {
        let miArray = texto.split("")
        let fl = miArray[0].toUpperCase();
        console.log(fl);
        miArray[0] = fl
        texto = miArray.join("")
        return texto;
    }

    return (
        image ? <>
            <div className="card-detail">
                <img src={image} alt="Product Image" className='img' />
                <div className="detail">
                    <div className="name">{name}</div>
                    <p className="price">Categoría: {agrandarPrimeraLetra(categoria)}</p>
                    <p className="price">${price}</p>
                    <span className="stock">Stock: {stock}</span>
                    <p>{description}</p>
                    <ItemCount stock={stock} />
                </div>
            </div>
        </> : <div className="loader"></div>
    )
}
export default ItemDetail
