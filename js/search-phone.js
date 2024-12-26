
let phones = [
    {id: 1, pName: "iPhone 15 pro max", price: 165000},
    {id: 2, pName: "iPhone 14 pro max", price: 145000},
    {id: 3, pName: "iTel p32 mobile", price: 165000},
    {id: 4, pName: "Symphony d36 mobile", price: 165000},
    {id: 5, pName: "One plus", price: 165000},
    {id: 6, pName: "Oppo a45 phone", price: 165000},
    {id: 7, pName: "Nokia B33 mobile", price: 165000},
    {id: 8, pName: "Nokia wb7 mobile", price: 165000},
    {id: 9, pName: "One plus 5", price: 165000},
    {id: 10, pName: "One plus", price: 165000},
]



let searchProducts = (phones, search) => {
    const matchingProducts = [];
    for(let phone of phones){
        if( phone.pName.toLowerCase().includes(search.toLowerCase()) ){
            matchingProducts.push(phone);
        }
    }
    return matchingProducts;
}
let result = searchProducts(phones, "one plus");
console.log(result);

