import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import { useUserContext } from '../../context/ContextProvider';


const ItemDetailContainer = () => {

    const {getProducts, products} = useUserContext();
    const { id } = useParams();
    const prodId = parseInt(id)
    const [product, setProduct] = useState()

    function obtenerProducto() {
        getProducts()
        setProduct(products.find((item) => item.id === prodId));
    }
    useEffect(() => {
        obtenerProducto()
    }, [])
    return (
        <div className='ItemDetail'>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer