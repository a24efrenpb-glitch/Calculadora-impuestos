const calcularSubtotal = (precio, cantidad) => precio * cantidad;

function calcularImpuesto(subtotal, porcentaje) {
    if (subtotal < 0 || porcentaje < 0) {
        throw new Error("Los valores no pueden ser negativos");
    }

    return subtotal * (porcentaje / 100);
}

const calcularTotal = (subtotal, porcentaje) => subtotal + calcularImpuesto(subtotal, porcentaje);

module.exports = { calcularSubtotal, calcularImpuesto, calcularTotal };




