
class Cripto {

    Cripto(nombreV, CantidadV, CotizacionV) {
        this.cantidad = CantidadV;
        this.cotizacion = CotizacionV;
        this.nombre = nombreV;
    };
}

var array = [];
continuar = 1;
nombre = '';
cantidad = 0;
cotizacion = 0;
contador = 0;
var html = '';


window.alert('Proceso para cargar toda tu wallet ');

while (continuar == 1) {

    nombre = window.prompt('Ingrese nombre de Cripto : ');

    cantidad = window.prompt('Ingrese cantidad de esa cripto : ');

    cotizacion = window.prompt('Ingrese cotizacion de esa cripto : ');

    const a = new Cripto(nombre,cantidad,cotizacion);

    a.nombre = nombre;
    a.cantidad = cantidad;
    a.cotizacion = cotizacion;

    array.unshift(a);

    continuar = window.prompt('Ingrese 1 Si desea agregar otra cripto : ');

}
const cardContainerQuery = document.querySelector('#Prueba2')


while (array.length != contador) {
    console.log('Nombre de la cripto moneda : ' + array[contador].nombre + ' Cotizacion de la criptomoneda : ' + array[contador].cotizacion + 'Cantidad de la criptomoneda : ' + array[contador].cantidad);

    const criptohtml = document.createElement('tr')
    criptohtml.innerHTML = `
        <tr>
            <td> ${array[contador].nombre} </td>
            <td> ${array[contador].cantidad} </td>
            <td> ${array[contador].cotizacion} </td>
        </tr>
    `

    cardContainerQuery.append(criptohtml)

    contador++;
}



