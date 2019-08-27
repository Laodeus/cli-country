
console.log("So... It begin... brace yourself");

const { getCode, getName } = require('country-list');
const axios = require('axios');

let country2digit = [];
let year = new Date().getFullYear();

const getHolliday = async (country, year) => {
    try {
        uri = "https://date.nager.at/api/v2/publicholidays";
        const response = await axios.get(`${uri}/${year}/${country}`);
        return response;
    }
    catch (error) {
        console.log("Sometimes, things would seems to fall appart... => " + error);
    }
};



process.argv.forEach((element, id) => {

    if (getCode(element) != undefined && id > 1) {
        country2digit[country2digit.length] = getCode(element);
        //console.log(`id => ${id} => ${element} => ${getCode(element)} `);

    }
    else if (getName(element) != undefined && id > 1) {
        country2digit[country2digit.length] = element;
        //console.log(`id => ${id} => ${element} => ${getName(element)} `);

    }
    else if (/^[0-9][0-9][0-9][0-9]$/.test(element) && id > 1) {
        year = element;
        //console.log(`the date ${element} will be use for processing. `);


    }
    else {
        // id > 1 ? console.log(`id => ${id} => ${element} => is not a valid country! `) :"" ;
    }

});

console.clear();
console.log(`${year} will be used for the request.`);



country2digit.forEach(async (elem) => {
    const response = await getHolliday(elem, year);
    console.log(`${elem} => `);
    response.data.forEach((respElem,id)=>{
        console.log(`   element ${id} => ${respElem.localName} is ${respElem.date}`)
    });
});
