# Calculadora de impuestos

Proyecto desarrollado en JavaScript para calcular precios
de productos aplicando impuestos.

## Requisitos

- Node.js
- npm
- Git

## Instalación

Clonar el repositorio:

git clone URL_DEL_REPOSITORIO

Instalar las dependencias:

npm install

## Uso

El proyecto dispone de tres funciones:

- calcularSubtotal(precio, cantidad)
- calcularImpuesto(subtotal, porcentaje)
- calcularTotal(subtotal, porcentaje)

Ejemplo:

const { calcularTotal } = require('./src/precios');

console.log(calcularTotal(100, 21));

Resultado: 121
