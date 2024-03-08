import React, { createContext, useContext, useState } from 'react'
import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import Swal from 'sweetalert2'

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
const orderCollection = collection(db, "orders");

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);
function toastCorrect() {
  return (Toastify({
    text: " ✔ Producto agregado correctamente",
    duration: 2000,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: false, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () { } // Callback after click
  }).showToast())
}
export const ContextProvider = (props) => {
  const [cart, setCart] = useState([]);

  const [products, setProducts] = useState([]);

  function addToCart(product) {
    let oldCart = [...cart]

    if (oldCart.some(item => item.image === product.image)) {
      let index = oldCart.findIndex(item => item.image === product.image);
      if (oldCart[index].cantidad >= product.stock) {
        Toastify({
          text: "No hay suficiente stock de este producto",
          duration: 2000,
          close: true,
          gravity: "bottom", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: false, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #c61a09, #ff6242)",
          },
        }).showToast();
      } else {
        oldCart[index].cantidad += 1;
        toastCorrect();
      }
    } else {
      let newProduct = {
        cantidad: 1,
        ...product
      }
      oldCart.push(newProduct)
      toastCorrect();
      setCart(oldCart)
      console.log(oldCart);
    }
  }

  function getProducts() {
    getDocs(myCollection).then(snapshot => {

      let productos = snapshot.docs.map((item) => {
        return (item.data());
      })
      setProducts(productos)

    }).catch(err => console.log(err));
  }

  function deleteProd(id) {
    let cartAux = [...cart].filter(item =>  item.id !== id)
    setCart(cartAux)
  }

  function createOrder(nombre, apellido, email) {
    if(cart.length > 0){
      const newOrder = {
        cliente : nombre,
        apellido: apellido,
        email: email,
        products: cart
      };
      addDoc(orderCollection, newOrder).then(res => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Se generó la orden con éxito",
          text: `Con el id ${res.id}`,
          showConfirmButton: false,
          timer: 6000
        });
        setTimeout(function () { window.location.href = "/" }, 5000);
      }).catch(err => console.log(err))
      setCart([])
    }else{
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error",
        text: "No puedes crear una orden vacía",
        showConfirmButton: false,
        timer: 4000
      });
    }
  }
  return (
    <UserContext.Provider value={{ cart, addToCart, getProducts, setProducts, products, deleteProd, createOrder }}>
      {props.children}
    </UserContext.Provider>
  )
}
