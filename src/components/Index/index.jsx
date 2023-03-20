import { Grid } from "@mui/material";
import CardCategory from "../CardCategory";


const Index = () => {
    return (
        <div className="MainContainer">
        <h1>Categorias:</h1>
        <Grid container spacing={1}>
        <Grid item xs={3}><CardCategory key={"nuevas"} nombre={"nuevas"} imagen={"https://http2.mlstatic.com/D_NQ_NP_696354-MLA53160666080_012023-O.webp"} /></Grid>
        <Grid item xs={3}><CardCategory key={"usadas"} nombre={"usadas"} imagen={"https://http2.mlstatic.com/D_NQ_NP_614706-MLA47592809269_092021-O.webp"} /></Grid>
        </Grid>
        </div>
    );
}

export default Index;