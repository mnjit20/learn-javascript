//generator 

function* createCounter() {
  yield 'Hello ' + 1
  yield 2
  yield* create3To4Counter()
  yield 4
  yield 5
}

function* create3To4Counter() {
  yield 3
  yield 4
}
const hello = createCounter();

for (let i of hello) {
  console.log(i);
}