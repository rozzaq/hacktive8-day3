var nama = ['Jon Snow', 'Stark' , 'Nght King'];
var tampil = '';

nama[3] = 'Greyjoy';

nama.push('Sansa');
nama.pop();

nama.splice(0,0, "Arya","Drogon");

nama.forEach(function(item, index){
    tampil += index + ' ' + item + '<br />';
})
document.querySelector('#nama').innerHTML = tampil;



console.log(typeof nama);