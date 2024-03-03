import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { useUserContext } from '../../context/ContextProvider';
import { useState } from 'react';
import ItemList from '../ItemList/itemList';

const ItemFiltered = () => {
    const { getProducts, products } = useUserContext();
    const { categoryID } = useParams();

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getProducts();
        setProductos(products.filter((item) => item.categoria == categoryID))
    }, [categoryID])

    return (
        <>
            {productos == "" ? <div className="loader"></div> : <ItemList products={productos} />}
        </>
    )
}

export default ItemFiltered