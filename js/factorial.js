/**
 * function sumNumber (){
    let sum = 0;
    for (let i = 1; i <= 10; i++ ) {
        sum = sum + i
        console.log(i, sum);
        
    }
}
sumNumber ();
 */

function multiNumber(){
    multi = 1;
    for(let i = 1; i <= 5; i++){
        multi = multi * i;
    }
    return multi;
}
let result = multiNumber();
console.log(result);
