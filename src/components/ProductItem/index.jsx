import { useParams } from "react-router-dom";
import AddCartButton from "../AddCartButton";
import db from "../../../db/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

const ProductItem = ({items}) => {
    let { idProduct } = useParams();
    const docRef = doc(db, "items", idProduct);
    const [producto, setProducto] = useState([]);
    const getItems = async () => {
        try {
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()) {
                console.log(producto.nombre)
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
            <AddCartButton product={producto} />
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