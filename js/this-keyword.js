//console.log(typeof this);

// function test () {
//     console.log(this);
    
// }
// test ();



let user = {
    firstName: "Pinki",
    lastName: "Biswas",
    message: function() {
        console.log(`Hello my name is ${this.firstName} and i have a  ${product.productName}`);
        
    }
}

const product = {
    productName: "ipad",
    age: 30
}
user.message();