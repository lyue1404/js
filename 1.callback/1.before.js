Function.prototype.before = function(callback) {
    const that = this;
    return function() {
        callback();
        that.apply(that, arguments);
    }
}

function fn(value) {
    console.log('我要收拾出门', value);
}

fn.before(() => {
    console.log('我要起床')
})()
