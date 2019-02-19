const fs = require('fs');

function after(times, callback) {
    let arr = [];
    return function(data) {
        arr.push(data);
        if(--times == 0) {
            callback(arr);
        }
    }
}

const out  = after(2, (data) => {
    console.log(data);
})

fs.readFile('./name.txt', 'utf8', (err, data) => {
    out(data);
})

fs.readFile('./file.txt', 'utf8', (err, data) => {
    out(data);
})