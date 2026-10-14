//luas lingkaran
function luas( r:number): number {
    return 3.14 * r * r;
}

//keliling lingkaran
const keliling =(r: number): number => 2* 3.14 * r ;

//jari jarinya 10
 let hasilLu: number = luas (10);
 let hasilKel: number = keliling (10);

 

 const output = document.getElementById('output')as HTMLElement;
 output .innerHTML += `luas lingkaran = ${hasilLu}<br> keliling lingkaran = ${hasilKel}<br>`;