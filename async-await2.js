const fetch = require("node-fetch");

async function main() {
  const startTime = Date.now();

  console.log("Starting operation");
  const threePromise = fetch("https://httpbin.org/delay/3"); //delay 3 seconds
  const twoPromise = fetch("https://httpbin.org/delay/2"); // delay 2 seconds

  console.log("Other Work");
  console.log("Please wait ...");

  const threeResponse = await threePromise; // wait until it's complete
  const twoResponse = await twoPromise; // wait until it's complete

  // do something with the response

  const finishTime = Date.now() - startTime;

  console.log(`Operation took ${finishTime / 1000} seconds`);
}

main();
