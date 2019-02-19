const fs = require('fs');

function readFile(url) {
    return new Promise((resolve, reject) => {
        fs.readFile(url, 'utf8', function(err, data){
            if(err) reject(err);
            resolve(data);
        })
    })
}

readFile('./name.txt').then(data => {
    return readFile(data);
}).then(data => {
    return 100;
}).then(data => {
    console.log(data);
}).catch(err => {
    throw err
}).then(data => {
    console.log(data);
}, (err) => {
    console.log('error');
})