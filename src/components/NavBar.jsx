import "./NavBar.css"
import {Button, ButtonGroup} from "@mui/material";
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <header>
        <div>
        <Button className="logo" color="primary" href="/">JP HOBBY- OTAKU STORE</Button></div>
            <nav>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button href="/" variant="outlined">Inicio</Button>
                <Button href="/productos" variant="outlined">Productos</Button>
                <Button href="/nuevas" variant="outlined">Nuevas</Button>
                <Button href="/usadas" variant="outlined">Usadas</Button>
                <Button href="/quienes-somos" disabled variant="outlined">Sobre nosotros</Button>
                <CartWidget />
            </ButtonGroup>
            </nav>
        </header>
    );
}

export default Navbar;