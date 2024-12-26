
const first = (a, b, callback) => {
    setTimeout(() => {
        console.log(a+b);
        callback();
    }, 2000);
 
}

const second = () => {
    console.log("HI, I am a programmer");
    
}

first(4, 5, second);

