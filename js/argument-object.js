

function sum () {
    if (arguments.length == 0) {
        console.log("Documents not found");
        
    } else {
        let store = 0;
        for (let i = 0; i < arguments.length; i++) {
            store = store + arguments[i];
        }
        console.log(store);
        
    }

}

sum (2, 7, 3, 1, 8);