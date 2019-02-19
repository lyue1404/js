function Promise(executor) {
    let self = this;
    self.state = 'pending';
    self.value = undefined;
    self.reason = undefined;
    self.onResolvedCallbacks = [];
    self.onRejectedCallbacks = [];
    function resolve(value) {
        if(self.state === 'pending') {
            self.state = 'fulfilled';
            self.value = value;
            self.onResolvedCallbacks.forEach(fn => fn());
        }
    }
    function reject(reason) {
        if(self.state === 'pending') {
            self.state = 'rejected';
            self.reason = reason;
            self.onRejectedCallbacks.forEach(fn => fn());
        }
    }
    try{
        executor(resolve, reject);
    }catch(e) {
        reject(e);
    }
    
}

function resolvePromise(promise2,x,resolve,reject) {//判断x是不是promise
    
}

Promise.prototype.then = function(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : e => { throw e };
    let self = this;
    let promise2 =  new Promise((resolve, reject) => {
        if(self.state === 'fulfilled') {
            setTimeout(() => {
                try{
                    let x = onFulfilled(self.value);
                    resolvePromise(promise2,x,resolve,reject);
                }catch(e) {
                    reject(e);
                }
            },0)
            
        }
        if(self.state === 'rejected') {
            setTimeout(() => {
                try{
                    let x = onRejected(self.reason);
                    resolvePromise(promise2,x,resolve,reject);
                }catch(e) {
                    reject(e);
                }
            })      
        }
        if(self.state === 'pending') {
            self.onResolvedCallbacks.push(function() {
                setTimeout(() => {
                    try{
                        let x = onFulfilled(self.value);
                        resolvePromise(promise2,x,resolve,reject);
                    }catch(e) {
                        reject(e);
                    }
                },0)
            })
            self.onRejectedCallbacks.push(function(){
                setTimeout(() => {
                    try{
                        let x = onRejected(self.reason);
                        resolvePromise(promise2,x,resolve,reject);
                    }catch(e) {
                        reject(e);
                    }
                },0)
            })
        }
    })
    return promise2;
}

module.exports = Promise;