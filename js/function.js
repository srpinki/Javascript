
/** 

function myFunction(name, country) {
    console.log("My name is " + name + " and I am from " + country);
    
}

myFunction( "Pinki", "Bangladesh" );


function addFunction(num1, num2){
    let total = num1 * num2;
    return total;
}

const result = addFunction( 20, 40 );
console.log(result);



function countFunction(num1, num2){
    let eggPrice = num1;
    let qty = num2;
    let total = eggPrice * qty;
    return total
}
let count_total = countFunction(15, 5);
console.log(count_total);


function myCost(money){
    let eggPrice = 15;
    let quantity = money / eggPrice;
    return quantity;

}

let total_egg = myCost(75);
console.log(total_egg);


function myArray(name){
    let friendsName = [name,  name];
    return friendsName;
}

let names = myArray("Pinki Biswas", "Rimi");
console.log(names);
*/



const products = {
    names: "Byke",
    price: 200000,
    color: "Blue"
}

function addProducts (anyObjects) {
    return (`Product name is ${anyObjects.names}. Products color is ${anyObjects.color}. Price is ${anyObjects.price}`);
    
}
let result = addProducts(products);
console.log(result);



//const aryProducts = [500, 400, 700, 200];
function aryFunction(anyArry){
        console.log(`This is arry products ${anyArry[1]}`);
        
}

aryFunction([500, 400, 700, 200]);


function productsPrice () {
    let ricePrice = 20;
    let riceWeight = 5;
    let total = ricePrice * riceWeight;

    console.log(total);
    
}

productsPrice ();



