// pending, resolve, reject

const willMarry = true;

new Promise (( resolve, reject) => {
    setTimeout(() => {
        if (willMarry) {
            resolve ("success");
        } else {
            reject ("Sorry ......")
        }
    }, 2000);
}).then((value) => {
    console.log(value);
    
}).catch((error) => {
    console.log(error);
    
})