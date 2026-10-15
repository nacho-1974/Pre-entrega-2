const nombre = prompt("Ingresá tu nombre:");
const apellido = prompt("Ingresá tu apellido:");
alert("¡Bienvenido/a a la tienda, " + nombre + " " + apellido + "!");



let total = 0;
let seguirComprando = true;

while (seguirComprando) {
    const opcion = prompt(`Seleccioná un producto para agregar al carrito:
1. Zapatillas ($50000)
2. Remera ($20000)
3. Buzo ($35000)
4. Finalizar compra`);
    switch (opcion) {
        case "1":
            total += 50000;
            alert("Agregaste Zapatillas. Subtotal: $" + total);
            break;
        case "2":
            total += 20000;
            alert("Agregaste una Remera. Subtotal: $" + total);
            break;
        case "3":
            total += 35000;
            alert("Agregaste un Buzo. Subtotal: $" + total);
            break;
        case "4":
            seguirComprando = false;
            break;
        default:
            alert("Opción no válida. Por favor, elegí un número del 1 al 4.");
            break;
    }
}

if (total > 0) {
    alert("¡Gracias por tu compra! El total a pagar es: $" + total);
    console.log("Total final abonado: $" + total);
} else {
    alert("No agregaste ningún producto al carrito.");
}
