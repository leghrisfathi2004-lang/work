const prompt = require ("prompt-sync")();

let number = Number(prompt("Enter a number: "));

for (let i=1; i<=10; i++){

    let multp= number * i;
    console.log(`${number} * ${i} = ${multp}`);
}