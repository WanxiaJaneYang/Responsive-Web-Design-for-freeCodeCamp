const users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

function countOnline(usersObj) {

    let count = 0;
    for (let user in usersObj) {
        //note: if we use user.online directly, it will show online is undefined
        if (usersObj[user].online) {
            count++;
        }
    }
    return count

}

console.log(countOnline(users));