var nama = [
    'Jon Snow',
    'Stark',
    'Night King'
];

var characters = {
    name: 'Jon Snow',
    age: 22,
    skinColor: 'white',
    isAlive: true,
    killHim: function(){
        this.isAlive = false;
    },
    siblings:[
        'Sansa',
        'Rickon',
        'Bran'
    ]

};

console.log(characters);
