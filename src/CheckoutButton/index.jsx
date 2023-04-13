import { addDoc, collection, getFirestore } from "firebase/firestore";
import db from "../../db/firebase-config";
import showAlert from "../showAlert";
import { useState } from "react";

const CheckoutButton = (infoCliente,cart) => {
    const ordenCompra = {};
    ordenCompra.infoCliente = infoCliente;
    ordenCompra.cart = cart;
    console.log(ordenCompra)
    const OrdersCollectionRef = collection(db, 'orders');
    addDoc(OrdersCollectionRef, ordenCompra)
    .then(docRef => {
        console.log(docRef.id);
        showAlert("success", docRef.id);
    })
    .catch(error => {
        console.log(error);
    })
}
export default CheckoutButton;