import { useParams } from "react-router-dom";
import AddCartButton from "../AddCartButton";
import db from "../../../db/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { MenuItem, Select } from "@mui/material";

const ProductItem = ({}) => {
    let { idProduct } = useParams();
    const docRef = doc(db, "items", idProduct);
    const [producto, setProducto] = useState([]);
    const getItems = async () => {
        try {
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()) {
                console.log(doc.id)
                setProducto(docSnap.data())
            } else {
                console.log("Document does not exist")
                setProducto(false)
            }
        
        } catch(error) {
            console.log(error)
        }
    }
    useEffect (() => {
        getItems();
    }, []);
    const [value, setValue] = useState(1);
    function handleChange(event) {
        setValue(event.target.value);
        console.log(event.target.value)
        }
    if (producto){
        return (
            <div className="MainContainer">
            <h3>{producto.nombre}</h3>
            <img src={producto.imagen} alt={producto.nombre} />
            <h4>Precio: {producto.precio}$</h4>
            <h4>Fabricante: {producto.fabricante}</h4>
            <h4>Personaje: {producto.personaje}</h4>
            <h4>Altura: {producto.altura} cm</h4>
            <h4>Usada: {producto.usada}</h4>
            <h4>Articulada: {producto.articulada}</h4>
            <Select value={value} onChange={handleChange}>
            {[...Array(10)].map((_, index) => (
                <MenuItem key={index + 1} value={index + 1}>{index + 1}</MenuItem>
            ))}
        </Select>
            <AddCartButton product={producto} cantidad={value} />
        </div>
        )
    }
    else {
        return (
            <div className="MainContainer">
            <h3>Producto no encontrado</h3>
        </div>
        )
    }
    }

export default ProductItem;