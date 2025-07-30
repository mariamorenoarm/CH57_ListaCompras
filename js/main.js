const txtName = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const btnAgregar = document.getElementById("btnAgregar");
const btnClear = document.getElementById("btnClear");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

function validarCantidad(){
    if(txtNumber.value.length==0){
        return false;
    } //validar que tenga informacion
   if (isNaN(txtNumber.value)){
    return false;
   } //Tiene que ser un número
   if (Number(txtNumber.value)<=0){
    return false;
   } //mayor que 0

   return true;

}

btnAgregar.addEventListener("click", function(event){
    event.preventDefault();
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";

    //Name
    //Validar que tenga información mínimo 3 letras
    if(txtName.value.length<3){
        //mensaje de error
        txtName.style.border="medium red solid";
        alertValidacionesTexto.innerHTML=
        "<strong>El nombre del producto no es conrrecto </strong>";
        alertValidaciones.style.display="block";
    }//<3

    if(! validarCantidad()){
          alertValidacionesTexto.innerHTML+=
        "<strong>La cantidad no es conrrecta </strong>";
        alertValidaciones.style.display="block";
    }


    //Number
    //Tenga inormación, tiene que ser un número, mayor que 0


}); //btnAgregar click