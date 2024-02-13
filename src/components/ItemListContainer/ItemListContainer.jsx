import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../data/products";
import ItemList from "../ItemList/itemList";
import { useParams } from "react-router";

function ItemListContainer() {
    const [products, setProducts] = useState([]);

    const {categoryID} = useParams()
    useEffect(() => {
        const func = categoryID ? getProductsByCategory : getProducts;

        func(categoryID)
            .then(response => setProducts(response))
            .catch(error => console.log(error))
    }, [categoryID])

    return (
        <>
        {products == "" ? <h4>Cargando..</h4> : <ItemList products={products}/>}
        </>
    )
}

export default ItemListContainer