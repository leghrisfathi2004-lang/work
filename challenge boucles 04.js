const prompt = require ("prompt-sync")();

let nombre = prompt("entre un nombre: ");
nomberinverse = nombre.split('').reverse().join('');

console.log(`le nombre ${nombre} leur inverse est: ${nomberinverse}`);
