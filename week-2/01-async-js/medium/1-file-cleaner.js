// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

function readFile() {
  return new Promise(function (resolve) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
      resolve(data);
    });
  });
}

function eliminateString(x) {
  if (x != "") return x;
}

function arrayOfStrings(x) {
  // let arr = x.split(" ");
  // console.log(arr.filter(eliminateString).join(" "));
  // return arr.filter(eliminateString).join(" ");
  return new Promise(function (resolve) {
    let arr = x.split(" ");
    console.log(arr.filter(eliminateString).join(" "));
    resolve(arr.filter(eliminateString).join(" "));
  });
}

function midState(data) {
  console.log(data);
  return new Promise(function (resolve) {
    resolve(data);
  });
}

function writeFile(content) {
  fs.writeFile("a.txt", content, (err) => {
    if (err) throw err;
  });
}

readFile().then(midState).then(arrayOfStrings).then(writeFile);
