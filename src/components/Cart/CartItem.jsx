import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/ContextProvider'
import './CartItem.css'
const CartItem = () => {
    const { cart, deleteProd} = useUserContext();
    return (
        <div className='items-container'>
            <div className='contenido'>
                {cart.map((item, index) =>
                    <div className='cart-container' key={index}>
                        <button className='delete-button' onClick={()=> deleteProd(item.id)}>X</button>
                        <img src={item.image}
                            alt="" className='prod-image' />
                        <div key={item.id} className="item-content">
                            <span className='nombre'>Nombre: {item.name}</span>
                            <span className='precio'>Precio: {item.price}</span>
                            <span className='cantidad'>Cantidad: {item.cantidad}</span>
                        </div>

                    </div>

                )}
            </div>
            {cart.length > 0 ? <Link to="/checkout-form" className='buy-button' >Comprar</Link> : <div className='alert'>Tu carrito está vacio</div>}
        </div>
    )
}

export default CartItem