const prompt = require ("prompt-sync")();

function addition(a, b){
    let res = a + b;
    console.log(`${a} + ${b} = ${res}`);
    return `\n${a} + ${b} = ${res}`;
}

function Soustraction( a, b){
    res = a - b;
    console.log(`${a} - ${b} = ${res}`);
    return `\n${a} - ${b} = ${res}`;
}

function Multiplication( a, b){
    res = a * b;
    console.log(`${a} * ${b} = ${res}`);
    return `\n${a} * ${b} = ${res}`;
}

function Division( a, b){
    res = a / b;
    console.log(`${a} / ${b} = ${res}`);
    return `\n${a} / ${b} = ${res}`;
}

function Puissance( a, b){
    res = a ** b
    console.log(`${a} ^ ${b} = ${(res)}`);
    return `\n${a} ^ ${b} = ${(res)}`;
}

function Racine(a){
    res = a ** 0.5;
    console.log(`${a} ^ 0.5 = ${res}`);
    return `\n${a} ^ 0.5 = ${res}`;
}

function Factorielle(a){
    res = 1;
    for(let i=0; i<a; i++){
        res *=(a - i);
    }
    console.log(`${a}! = ${res}`);
    return `\n${a}! = ${res}`;
}




let call=0;
let n1;
let n2;
let history = [];

while( call <9){

    call = Number( prompt("select l operation:\n  pour Addition: 1\n  pour Soustraction: 2\n  pour Multiplication: 3\n  pour Division: 4\n  pour Puissance: 5\n  pour Racine carrée: 6\n  pour Factorielle: 7\n  pour affiche histoire: 8\n  pour quite entre: 9\n votre reponse: "));
    
    switch(call){
        case 1:
            n1 = Number(prompt("entre le 1er number: "));
            n2 = Number(prompt("entre le 2eme number: "));
            history.push(addition(n1, n2));
            break;
        case 2:
            n1 = Number(prompt("entre le 1er number: "));
            n2 = Number(prompt("entre le 2eme number: "));
            history.push(Soustraction(n1, n2));
            break;
        case 3:
            n1 = Number(prompt("entre le 1er number: "));
            n2 = Number(prompt("entre le 2eme number: "));
            history.push(Multiplication(n1, n2));
            break;
        case 4:
            n1 = Number(prompt("entre le 1er number: "));
            n2 = Number(prompt("entre le 2eme number: "));
            while(n2 == 0) n2 = Number(prompt("faut !=0, rentre le 2eme number: "));
            history.push(Division(n1, n2));
            break;
        case 5:
            n1 = Number(prompt("entre le 1er number: "));
            n2 = Number(prompt("entre le puissance: "));
            history.push(Puissance(n1, n2));
            break;
        case 6:
            n1 = Number(prompt("entre le number: "));
            history.push(Racine(n1));
            break;
        case 7:
            n1 = Number(prompt("entre le number: "));
            history.push(Factorielle(n1));
            break;
        case 8:
            console.log(`l historique: ${history}`)
            break;
        default:
            break;
    }
}