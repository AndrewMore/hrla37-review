const db = require('./index.js');
const pokemon = require('../pokemon.json')

function seedInfo (){
  pokemon.forEach((poke) => {
    db.query(`INSERT INTO pokemon (pokeName, pokeType, pokeImg) VALUES("${poke.name}", "${poke.type}", "${poke.img}");`, (err, result) => {
      if(err){
        console.error('Failed seeding', err)
      } else {
        console.log('Success seeding')
      }
    })
  })
  db.end();
}

seedInfo();