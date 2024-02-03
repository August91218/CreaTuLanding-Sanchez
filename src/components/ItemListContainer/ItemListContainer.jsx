import { useEffect, useState } from "react"
import { getProducts } from "../../data/products";
import ItemList from "../ItemList/itemList";

function ItemListContainer({ mensaje }) {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        getProducts()
            .then(response => setProducts(response))
            .catch(error => console.log(error))
    }, [])

    return (
        <>
        {products == "" ? <h4>Cargando..</h4> : <ItemList products={products}/>}
        </>
    )
}

export default ItemListContainer