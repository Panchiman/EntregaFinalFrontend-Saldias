import { useEffect, useState } from "react";
import CardProduct from "./CardProduct";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import db from "../../db/firebase-config";

const ItemListContainer = ({}) => {
    const {idCategory} = useParams();
    let filteredItems = [];
        let category = "";
        let categoryName = "";
    
        const [items, setItems] = useState([]);
        const itemsRef = collection(db, "items");
        
        const getItems = async () => {
            const itemCollection =  await getDocs(itemsRef)
            const items = itemCollection.docs.map((doc) => ({...doc.data(), id: doc.id}))
            setItems(items);
        }
        
        useEffect (() => {
            getItems();
        }, []);
        if (idCategory) {
            if (idCategory === "nuevas") {
                category = "no"
                categoryName = "Nuevas"
            }
            else {
                category = "si"
                categoryName = "Usadas"
            }
            filteredItems = items.filter((product) => product.usada === category);
        }
        else {
            filteredItems = items;
            categoryName = "Todas las figuras";
        }

    console.log(items)
    
    return (<div className="MainContainer">
    <h1>{categoryName}</h1>
    <Grid container spacing={1}>
        {filteredItems.map((product, id) => (
    <Grid item xs={3} key={product.id}><CardProduct product={product} /></Grid>))}
    </Grid>
    </div>)
}

export default ItemListContainer;