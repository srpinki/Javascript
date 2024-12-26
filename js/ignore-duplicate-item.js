
let friendList = ["Mita", "Rima", "Simu", "Sumiya", "Joly", "Roton", "Mita", "Rima"];


function ignoreDuplicate (friendList) {
    let newList = [];
    for ( let i = 0; i < friendList.length; i++) {
        let element = (friendList[i]);
        if( newList.includes(element) === false ){
            newList.push(element);
        }
    }
    return newList;
}
let result = ignoreDuplicate(friendList);
console.log(result);

