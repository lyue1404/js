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