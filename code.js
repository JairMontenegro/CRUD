//variables definition
const url = "http://localhost:3000/api/articulos/"
const contenedor = document.querySelector("tbody")
let resultados = ""

const modalArticulo = new bootstrap.Modal(document.getElementById('modalArticulo'))
const formArticulo = document.querySelector("form")

const descripcion = document.getElementById("descripcion")
const precio = document.getElementById("precio")
const stock = document.getElementById("stock")
let opcion = ''

btnCrear.addEventListener("click",()=>{
    descripcion.value=''
    precio.value=''
    stock.value=''
    modalArticulo.show()
    opcion = "crear"
}
)