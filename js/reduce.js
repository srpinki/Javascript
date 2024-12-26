let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const total = numbers.reduce((inutialValue, currentValue) => inutialValue + currentValue, 0);
console.log(total);


let carItems = [
    {
        items : "shirt",
        price : 500
    },
    {
        items : "sharee",
        price : 1500
    },
    {
        items : "pant",
        price : 500
    },
    {
        items : "Shoe",
        price : 2500
    },

]

const totalPrice = carItems.reduce((initialValue, item) => {
    return initialValue + item.price;
}, 0);

//const totalPrice = carItems.reduce((prevValue, item) => prevValue + item.price, 0);

console.log(totalPrice);

