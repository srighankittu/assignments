/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let res = [];

  for (let item1 in transactions) {
    let notExist = false;

    if (!res.length) {
      let obj = {};
      obj["category"] = transactions[item1]["category"];
      obj["totalSpent"] = transactions[item1]["price"];
      res.push(obj);
    } else {
      for (let item2 in res) {
        if (res[item2]["category"] === transactions[item1]["category"]) {
          res[item2]["totalSpent"] += transactions[item1]["price"];
          notExist = true;
        }
      }

      if (!notExist) {
        let obj1 = {};
        obj1["category"] = transactions[item1]["category"];
        obj1["totalSpent"] = transactions[item1]["price"];
        res.push(obj1);
      }
    }
  }

  // console.log(res);
  return res;
}

calculateTotalSpentByCategory([
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: "Food",
    itemName: "Burger",
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: "Clothing",
    itemName: "T-Shirt",
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: "Electronics",
    itemName: "Headphones",
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: "Clothing",
    itemName: "Jeans",
  },
]);
module.exports = calculateTotalSpentByCategory;
