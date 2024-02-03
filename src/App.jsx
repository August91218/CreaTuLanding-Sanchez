import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/products" element={<ItemListContainer />} />
        <Route path="/" element={<h4>Bienvenidos a Tienda gamers!</h4>} />
        <Route path="*" element={<h4>Error 404 not found</h4>} />
        <Route path="/product/:id" element={<ItemDetailContainer />} />
      </Routes>
      
    </>
  )
}


export default App
