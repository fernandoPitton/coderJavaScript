

let total= 0;
let carrito= [];
function producto (nombre,precio){
	this.nombre = nombre;
	this.precio = precio;
}

const producto1 = new producto ("pan",100)
const producto2 = new producto ("leche",200)
const producto3 = new producto ("queso",300)
const producto4 = new producto ("galleta",400)



let seleccion = prompt("Desea realizar una compra? si/no")

while(seleccion != "si" && seleccion != "no"){
	alert("Ingrese si o no")
	seleccion =  prompt("Desea realizar una compra? si/no").toLowerCase()
}

if(seleccion == "si"){

	do {
		let productoSeleccionado= prompt("Estos son nustros productos: "+producto1.nombre+", "+producto2.nombre+", "+producto3.nombre+", "+producto4.nombre+" Ingrese el que quiere sumar al carrito:").toLowerCase()
		let cantidad = prompt("Ingrese la cantidad")
		agregarProducto(productoSeleccionado, cantidad);

		continuarCompra = prompt("Desea agregar otro producto? si/no").toLowerCase()
	}while(continuarCompra != "no")
	
	alert("Gracias por su compra: "+carrito+" Total: "+total)

}else{alert("Gracias por su visita!")}



function agregarProducto (producto, cantidad){
switch(producto){
	case "pan":
		total += producto1.precio * cantidad;
		carrito.push("Pan");
		break
	case "leche":
		total += producto2.precio * cantidad;
		carrito.push("Leche");
		break
	case "queso":
		total += producto3.precio * cantidad;
		carrito.push("Queso");
		break
	case "galleta":
		total += producto4.precio * cantidad;
		carrito.push("Galleta");
		break	
	default: alert("Producto inexistente")
}
}