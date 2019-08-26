#!/usr/bin/env node

console.clear();
console.log("So... It begin... brace yourself");

const { getCode, getName } = require('country-list');

let country2digit = []


process.argv.forEach((element, id) => {

    if (getCode(element) != undefined && id > 1) {
        country2digit[country2digit.length] = getCode(element);
        console.log(`id => ${id} => ${element} => ${getCode(element)} `);

    }
    else if (getName(element) != undefined && id > 1) {
        country2digit[country2digit.length] = element;
        console.log(`id => ${id} => ${element} => ${getName(element)} `);

    }


    else {
        id > 1 ? console.log(`id => ${id} => ${element} => is not a valid country! you bastard!!!!!!!!!!!`) : "";
    }

}); 