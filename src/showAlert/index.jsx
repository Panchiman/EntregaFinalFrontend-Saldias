import Swal from "sweetalert2";


const showAlert = (result, documentId) => {
    if (result === "success") {
        Swal.fire({
            title: "Compra realizada con exito",
            text: "La id de su compra es: " + documentId ,
            icon: "success",
            confirmButtonText: "OK",
        });
    }
    else{
        Swal.fire({
            title: "Error",
            text: "Error en la compra. Revise sus datos o si tiene productos en el carrito",
            icon: "error",
            confirmButtonText: "OK",
        });
    }
}

export default showAlert;
