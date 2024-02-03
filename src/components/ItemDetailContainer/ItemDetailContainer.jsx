import { useEffect, useState } from 'react'
import { getProductsById } from '../../data/products'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);

    const { id } = useParams();
    const prodId = parseInt(id)
    useEffect(() => {
        getProductsById(prodId)
            .then(response => {
                setProduct(response)
            }).catch(error => console.log(error));
    }, [prodId])
    return (
        <div className='ItemDetail'>
            <ItemDetail key={id} {...product} />
        </div>

    )
}

export default ItemDetailContainer