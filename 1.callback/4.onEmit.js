const fs = require('fs');

function Event () {
    this._arr = [];
}

Event.prototype.on = function(fn) {
    this._arr.push(fn);
}

Event.prototype.emit = function(r) {
    this._arr.forEach(fn => {
        fn(r);
    })
}

const e = new Event();
let arr = [];
e.on((r) => {
    arr.push(r);
    if(arr.length == 2) {
        console.log('读取完毕', arr);
    }
})

fs.readFile('./file.txt', 'utf8', (err, data) => {
    e.emit(data);
})

fs.readFile('./name.txt', 'utf8', (err, data) => {
    e.emit(data);
})

//发布 订阅 ：两者之间无关
//观察者模式： 观察者 + 被观察者 （有关系的） vue 双向绑定