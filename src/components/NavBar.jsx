import CartWidget from "./CartWidget/CartWidget"    
import logo from "../assets/logo.png";


function NavBar() {
    return (
        <nav className="p-2 bg-danger"> 
            <ul className="nav d-flex justify-content-evenly align-items-center bg-danger">
                <li className="nav-item">
                    <img src={logo} alt="Logo Gamers" width="64px" height="64px"/>
                </li>
                <li className="nav-item ">
                    <a className="nav-link text-light active" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" href="#">Productos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" href="#">Comprar</a>
                </li>
                <li className="nav-item d-flex align-center text-light">
                    <CartWidget/>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar