import { addDoc, collection, getFirestore } from "firebase/firestore";
import db from "../../db/firebase-config";

const OrdenId = (value) => {
    let documentId = "";
    const checkout = Object.values(value)
    console.log(value)
    if (checkout) {
        const OrdersCollectionRef = collection(db, 'orders');
    addDoc(OrdersCollectionRef, value)
    .then(docRef => {
        console.log(docRef.id);
        documentId = docRef.id;
        return (<h1>Id de la compra: {documentId}</h1>)
    })
    .catch(error => {
        console.log(error);
    })
    }
    else{
        return (<h1>adios</h1>)
    }
}

export default OrdenId;