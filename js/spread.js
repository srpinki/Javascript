// let arrrest = [50, 20, 40, 90, 70];
// let newary = [100, 200, 300];
// let arrest2 = [...arrrest, 10, 60, 80, 90, 50, ...newary];


// console.log(arrest2);


let ary = [2, 5, 9, 7, 6];

function sum(num1, num2, num3, num4, num5){
    return num1 + num2 + num3 + num4 + num5;
}

console.log(sum (...ary));


let minMaxAry = [9, 60, 40, 3, 2, 7, 8];
console.log(Math.max(...minMaxAry));
