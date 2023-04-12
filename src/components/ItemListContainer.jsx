import { useEffect } from "react";
import CardProduct from "./CardProduct";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";

const ItemListContainer = ({items}) => {
    const {idCategory} = useParams();
    console.log(items)
    let filteredItems = [];
        let category = "";
        let categoryName = "";
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
    return (<div className="MainContainer">
    <h1>{categoryName}</h1>
    <Grid container spacing={1}>
        {filteredItems.map((product, id) => (
    <Grid item xs={3}><CardProduct key={id} product={product} /></Grid>))}
    </Grid>
    </div>)
}

export default ItemListContainer;