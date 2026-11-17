const calcularSubtotal = (precio, cantidad) => precio * cantidad;

const calcularImpuesto = (subtotal, porcentaje) => subtotal * (porcentaje / 100);

const calcularTotal = (subtotal, porcentaje) => subtotal + calcularImpuesto(subtotal, porcentaje);

module.exports = { calcularSubtotal, calcularImpuesto, calcularTotal };
