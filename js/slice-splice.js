let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const slnum = numbers.slice(1, 8);
console.log(slnum);

let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const slnum2 = numbers2.splice(3, 5);
console.log(slnum2);

let spnum = ["Bkash", "Mita", "Sumi", "Rima", "Mitu"];
const spresult = spnum.splice(1, 3, "pinki");
console.log(spresult);
console.log(spnum);


