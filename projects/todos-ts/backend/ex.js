const wait = (s) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("Hello world");
    }, s)
  );
};

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

const promiseMain = async () => {
  await wait(1000)
    .then((res) => {
      console.log(res);
    })
    .then(() => wait(1500))
    .then((res) => {
      console.log(res);
    })
    .then(() => wait(2000))
    .then((res) => {
      console.log(res);
    });
};

const asyncAwaitMain = async () => {
  console.log(await wait(1000));
  console.log(await wait(1500));
  console.log(await wait(2000));
};

const main = async () => {
  await promiseMain();
  await asyncAwaitMain();
};

main();
