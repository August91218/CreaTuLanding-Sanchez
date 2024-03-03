import React from 'react'
import './ItemDetail.css'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { useUserContext } from '../../context/ContextProvider'

const ItemDetail = ({ name, image, price, stock, description, categoria }) => {

    const { addToCart } = useUserContext();
    const handleAddToCart = () => {
        addToCart({ name, image, price, stock, description, categoria });
    };

    function agrandarPrimeraLetra(texto) {
        let dividedText = texto.split("")
        let fl = dividedText[0].toUpperCase();
        dividedText[0] = fl
        texto = dividedText.join("")
        return texto;
    }
    return (
        image ?
            <>
                <div className="card-detail">
                    <Link to="/products" className="back-btn">X</Link>
                    <div className='content-container'>
                        <img src={image} alt="Product Image" className='img' />
                        <div className="detail">
                            <div className="name">{name}</div>
                            <p className="price">Categoría: {agrandarPrimeraLetra(categoria)}</p>
                            <p className="price">${price}</p>
                            <span className="stock">Stock: {stock}</span>
                            <p>{description}</p>
                            <ItemCount stock={stock} />
                            <button className='buy-btn' onClick={handleAddToCart}>Añadir al carrito</button>
                        </div>
                    </div>
                </div>

            </> : <div className="loader"></div>
    )
}
export default ItemDetail
