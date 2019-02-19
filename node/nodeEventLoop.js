const fs = require('fs');

function someAsyncOperation(callback) {
  // Assume this takes 95ms to complete
  fs.readFile('./node/file.txt', 'utf8',callback);
}

const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`);
}, 1);


// do someAsyncOperation which takes 95 ms to complete
someAsyncOperation((err,data) => {
  const startCallback = Date.now();
  console.log('readFileCallback',data);
  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
    
  }
});

setTimeout(() => {
    console.log('timeout');
}, 0);
  
setImmediate(() => {
    console.log('immediate');
});

const fs = require('fs');
fs.readFile(__filename, () => {
    setTimeout(() => {
        console.log('timeout');
    }, 0);
    setImmediate(() => {
        console.log('immediate');
    });
});
let bar;

function someAsyncApiCall(callback) {
  process.nextTick(callback);
}

someAsyncApiCall(() => {
  console.log('bar', bar); // 1
});

bar = 1;

const foo = [1, 2];
const bar = ['a', 'b'];

foo.forEach(num => {
  setImmediate(() => {
    console.log('setImmediate', num);
    bar.forEach(char => {
      process.nextTick(() => {
        console.log('process.nextTick', char, num);
      });
    });
  });
});