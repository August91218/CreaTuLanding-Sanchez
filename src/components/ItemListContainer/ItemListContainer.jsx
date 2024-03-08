import { useEffect, useState } from "react"
import ItemList from './ItemList/ItemList'
import './ItemListContainer.css'
import { useUserContext } from "../../context/ContextProvider";
function ItemListContainer() {
    const { getProducts, products} = useUserContext();
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <>
            {products == "" ? <div className="loader"></div> : <ItemList products={products} />}
        </>
    )
}

export default ItemListContainer