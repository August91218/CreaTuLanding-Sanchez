import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartItem from "./components/Cart/CartItem";
import { ContextProvider } from "./context/ContextProvider";
import ItemFiltered from "./components/ItemListContainer/ItemFiltered/ItemFiltered";
import CheckoutForm from "./components/Cart/Checkout/CheckoutForm";

function App() {

  return (

    <>
      <ContextProvider>
        <NavBar />
        <Routes>
          <Route path="/products" element={<ItemListContainer />} />
          <Route path="/category/:categoryID" element={<ItemFiltered />} />
          <Route path="/category/*" element={<ItemListContainer />} />
          <Route path="/" element={<h4>Bienvenidos a Tienda gamers!</h4>} />
          <Route path="*" element={<h4>Error 404 not found</h4>} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/checkout-form" element={<CheckoutForm />}></Route>
        </Routes>
      </ContextProvider>
    </>

  )
}

/* UseContext:
const UserContext = createContext();const useUserContext = () => useContext(UserContext);const ContextProvider = (props) => {  const inicialState = {    name: 'John Doe',    email: 'johndoe@example.com',    profilePic:      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/20px-User-avatar.svg.png',    isLoggedIn: true,  };  const [user, setUser] = useState(inicialState);  function changeLogin(currentState) {    const userAux = {      ...user,      isLoggedIn: !currentState,    };    setUser(userAux);  }  return (    <UserContext.Provider value={{ user, changeLogin }}>      {props.children}    </UserContext.Provider>  );};
*/
export default App
