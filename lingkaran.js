"use strict";
//luas lingkaran
function luas(r) {
    return 3.14 * r * r;
}
const keliling = (r) => 2 * 3.14 * r;
let hasilLu = luas(10);
let hasilKel = keliling(10);
const output = document.getElementById('output');
output.innerHTML += `luas lingkaran = ${hasilLu}<br> keliling lingkaran = ${hasilKel}<br>`;
