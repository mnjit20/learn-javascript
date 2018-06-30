Symbol.asyncIterator = Symbol.asyncIterator || Symbol("asyncIterator");

//for await
const delay = (ms) => new Promise(resolve => {
  setTimeout(resolve, ms);
});

async function* someGenerator() {
  console.log('someGenerator');
  await delay(1000);
  yield 1;
  await delay(1000);
  yield 2;
  await delay(1000);
  yield 3;
  await delay(1000);
  yield 4;
}

function main() {

  for (value of someGenerator()) {
    console.log(value);
  }
}

main();