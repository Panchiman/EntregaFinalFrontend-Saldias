import "./NavBar.css"
import {Button, ButtonGroup} from "@mui/material";
import CartWidget from "./CartWidget/CartWidget.jsx";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    let activeStyle ={
        textDecoration: "underline",
    };
    return (
        <header>
        <div>
        <NavLink className="logo" color="primary" to="/">JP HOBBY- OTAKU STORE</NavLink></div>
            <nav>
            <div>
                <NavLink to="/" style ={({isActive}) => (isActive ? activeStyle : undefined)}>Inicio</NavLink>
                <NavLink to="/productos" >Productos</NavLink>
                <NavLink to="category/nuevas">Nuevas</NavLink>
                <NavLink to="category/usadas">Usadas</NavLink>
                <NavLink to="/quienes-somos">Sobre nosotros</NavLink>
                <CartWidget />
            </div>
            </nav>
        </header>
    );
}

export default Navbar;