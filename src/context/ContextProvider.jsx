import React, { createContext, useContext, useState } from 'react'
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhfdO6nmib9g6x1xRvRHQG6H88AZyW2aM",
  authDomain: "firetest-3754e.firebaseapp.com",
  projectId: "firetest-3754e",
  storageBucket: "firetest-3754e.appspot.com",
  messagingSenderId: "580065351632",
  appId: "1:580065351632:web:f7785dcaab127c3b94cbd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const myCollection = collection(db, "items");

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const ContextProvider = (props) => {
  const [cart, setCart] = useState([]);

  const [products, setProducts] = useState([]);
  /* const [product, setProduct] = useState([]); */

  function addToCart(product) {
    let oldCart = [...cart]
    oldCart.push(product)
    setCart(oldCart)
  }

  function getProducts() {
    getDocs(myCollection).then(snapshot => {

      let productos = snapshot.docs.map((item) => {
        return (item.data());
      })
      setProducts(productos)

    }).catch(err => console.log(err));
  }

  /* function getProduct(id) {
    getDocs(myCollection)
      .then(snapshot => {
        let producto = snapshot.docs.find((item) => item.data().id === id)
        setProduct(producto)
      }).catch(err => console.log(err));
  } */
  return (
    <UserContext.Provider value={{ cart, addToCart, getProducts, setProducts, products }}>
      {props.children}
    </UserContext.Provider>
  )
}
