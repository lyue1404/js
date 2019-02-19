const Promise = require('./promise');

let p = new Promise( (resolve, reject) => {
    console.log('start');  
    setTimeout(() => {
        console.log('定时器延迟1s');
        resolve('执行成功');
    }, 1000)
    
})

p.then((data) => {
    console.log('success', data);
},(reason) => {
    console.log('fail', reason);
})

console.log('end')