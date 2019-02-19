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
    executor(resolve, reject);
}

Promise.prototype.then = function(onFulfilled, onRejected) {
    let self = this;
    if(self.state === 'fulfilled') {
        onFulfilled(self.value);
    }
    if(self.state === 'rejected') {
        onRejected(self.reason);
    }
    if(self.state === 'pending') {
        self.onResolvedCallbacks.push(function() {
            onFulfilled(self.value)
        })
        self.onRejectedCallbacks.push(function(){
            onRejected(self.reason);
        })
    }
}

module.exports = Promise;