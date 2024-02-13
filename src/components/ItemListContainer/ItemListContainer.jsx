import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../data/products";
import ItemList from "../ItemList/itemList";
import { useParams } from "react-router";
import './ItemListContainer.css'
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
        {products == "" ? <div className="loader"></div> : <ItemList products={products}/>}
        </>
    )
}

export default ItemListContainer