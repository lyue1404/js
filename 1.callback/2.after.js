// lodash after 在多少次后执行某个方法

function after (times, callback) {
    return function() {
        if(--times == 0) {
            callback();
        }
    }
}

let newFn = after( 3, () => {
    console.log('执行after方法');
} )

newFn();
newFn();
newFn();