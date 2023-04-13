import { Button, FormControl, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import CheckoutButton from "../CheckoutButton";
import showAlert from "../showAlert";
import "./Checkout.css";

const Checkout = () => {
    let infoCliente = [];
    const {cart} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [email2, setEmail2] = useState("");
    const [telefono, setTelefono] = useState("");
    const handleSubmit = () => {
        if (nombre && email && email2 && email == email2 && telefono && cart.length > 0) {
            infoCliente.push(nombre, email, telefono);
            CheckoutButton(infoCliente, cart);
        }
        else{
            showAlert("error")
        }
    }
    return (
        <div className="formContainer">
            <FormControl fullWidth>
                <TextField margin="normal"
                    required
                    fullWidth
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                    error={!nombre}
                    helperText = {!nombre ? "Ingrese su nombre" : ""}
                    id="nombre"
                    label="Ingrese su nombre"
                    name="nombre"
                    autoComplete="name"
                    autoFocus>
                </TextField>
                <TextField margin="normal"
                    required
                    fullWidth
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    error={!email}
                    helperText = {!email ? "Ingrese su direccion de email" : ""}
                    id="email"
                    label="Ingrese su email"
                    name="email"
                    autoComplete="email"
                    autoFocus>
                </TextField>
                <TextField margin="normal"
                    required
                    fullWidth
                    value={email2}
                    onChange={e => setEmail2(e.target.value)}
                    error={email !== email2}
                    helperText = {email !== email2 ? "Las direcciones de email deben ser iguales" : ""}
                    id="email2"
                    label="Ingrese de nuevo su email"
                    name="email"
                    autoComplete="email"
                    autoFocus>
                </TextField>
                <TextField margin="normal"
                    required
                    fullWidth
                    value={telefono}
                    onChange={e => setTelefono(e.target.value)}
                    error={!telefono}
                    helperText = {!telefono ? "Ingrese su numero de telefono" : ""}
                    id="telefono"
                    label="Ingrese su telefono"
                    name="telefono"
                    autoComplete="tel"
                    autoFocus>
                </TextField>
                <Button onClick={handleSubmit} variant="outlined">Terminar la compra</Button>
            </FormControl>
        </div>
    );
}

export default Checkout;