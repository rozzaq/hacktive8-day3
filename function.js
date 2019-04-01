function tambah(x =  0, y = 0){
    //disini kode ditulis
    var hasil = x + y;

    return hasil;
}

var kurang =  function(x = 0, y = 0){
    var hasil = x - y;

    return hasil;
}

var hasil2 =  tambah(3, 5);
var hasil3 = tambah(4, 6);
var hasil4 = tambah();
var hasil5 = kurang(10,5);

console.log(hasil2);
console.log(hasil3);
console.log(hasil4);
console.log(hasil5);


function cariRAtarata(x,y,z){
    var jumlah = x+y+z;
    var ratarata = jumlah/3;
}

var x = 6;
var y = 5;
var z = 10;

var jumlah1 = x + y + z;
var ratarata1 = jumlah1 / 3;

console.log(ratarata1);


function isGanjil(angka){
    var hasil = '';

    if(angka % 2 === 0){
        hasil = false
    }else{
        hasil = true;
    }

    return(hasil);
}

console.log(isGanjil(2930291093021));

