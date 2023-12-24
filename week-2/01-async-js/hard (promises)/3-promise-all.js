function wait1(t) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, t);
  });
}

function wait2(t) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, t);
  });
}

function wait3(t) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, t);
  });
}

function calculateTime(t1, t2, t3) {
  const beforeDate = new Date();
  return Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(() => {
    const afterDate = new Date();
    return (afterDate - beforeDate) * 1000;
  });
}

module.exports = calculateTime;
