import CardProduct from "../components/CardProduct";
import { Grid } from "@mui/material";

const ItemListFiltered = ({products, estado}) => {
    let titulo = "";
    if (estado == "no") {
        titulo = "nuevas";
    }
    else{
        titulo = "usadas";
    }
    return (
        <div className="MainContainer">
        <h1>Figuras {titulo}:</h1>
        <Grid container spacing={1}>
            {products.map((product, id) => ( product.usada == estado ? <Grid item xs={3}><CardProduct key={id} product={product} id={id} /></Grid> : null)
        )}
        </Grid>

        </div>
    );
}

export default ItemListFiltered;