import "./NavBar.css"
import {Button, ButtonGroup} from "@mui/material";
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <header>
        <div>
        <Button className="logo" color="primary">JP HOBBY- OTAKU STORE</Button></div>
            <nav>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button disabled><a>Inicio</a></Button>
                <Button variant="outlined"><a>Productos</a></Button>
                <Button variant="outlined"><a>Sobre nosotros</a></Button>
                <CartWidget />
            </ButtonGroup>
            </nav>
        </header>
    );
}

export default Navbar;