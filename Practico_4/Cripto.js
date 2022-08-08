// JavaScript source code
class Cripto {
    nombre(nombreV) {
        this.nombre = nombreV;
    }

    constructor(nombreV, CantidadV, CotizacionV) {
        this.cantidad = CantidadV;
        this.cotizacion = CotizacionV;
        this.nombre = nombreV;
    };



    toString() {

        return 'Cripto : ' + this.nombre + ' Cantidad de cripto : ' + this.cantidad + ' Cotizacion : ' + this.CotizacionV + ''
    }
}
