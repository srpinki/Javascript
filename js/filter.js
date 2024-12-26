let numbers = [1, 2, 7, 8, 4, 3, 50, 90, 44];
let myNumber = numbers.filter( (number)=> number > 1 );

console.log(myNumber);



const details = [
    {name: "Pinki Biswas", age: 30, Profession: "Programmer"},
    {name: "Sumittra Biawas", age: 70, Profession: "Housewife"},
    {name: "Biplab das", age: 70, Profession: "Programmer"},
    {name: "Susant pal", age: 50, Profession: "writter"},
    {name: "Jhankar mahabub", age: 50, Profession: "Programmer"},
    {name: "Prosenjit", age: 60, Profession: "Actor"},
    {name: "Koyel mollik", age: 40, Profession: "Actor"},
]

const singleDetails = details.filter((single) => single.age ==70 )

console.log(singleDetails);
