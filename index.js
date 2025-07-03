function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const addFive = makeAdder(5);
const addTen = makeAdder(10);
const userProfile = {
  id: 12345,
  name: "Jane Doe",
  email: "jane.doe@example.com",
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    postalCode: "10001",
    geo: {
      lat: 40.7128,
      lng: -74.006,
    },
  },
  settings: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
      push: {
        enabled: true,
        frequency: "daily",
      },
    },
  },
  preferences: {
    language: "en",
    timezone: "America/New_York",
  },
};

function printObject(obj) {
  if (!obj) {
    return;
  }

  Object.keys(obj).map((key) => {
    if (typeof obj[key] != "object") {
      console.log(obj[key]);
    } else {
      printObject(obj[key]);
    }
  });
}

let nums = {
  a: 100,
  b: 200,
  title: "My nums",
  rating: {
    first: 1,
    second: 2,
    third: {
      fourth: 4,
      five: 5,
      six: {
        seven: 7,
      },
    },
  },
};

function addOne(nums) {
  if (!nums) return;
  Object.keys(nums).map((key) => {
    if (typeof nums[key] != "object") {
      if (!isNaN(nums[key])) {
        nums[key] += 1;
      }
    } else {
      addOne(nums[key]);
    }
  });
}

const salaries = {
  John: 1000,
  Jane: 1200,
  Jim: 900,
};

// const calculatedSalary = Object.keys(salaries).reduce((acc, curr) => {
//   acc += salaries[curr];
//   return acc;
// }, 0);

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 700 },
];

// const highestPricedProduct = products.reduce(
//   (acc, curr) => {
//     const { name, price } = curr;
//     if (acc["price"]) {
//       if (price > acc["price"]) {
//         acc["price"] = price;
//         acc["name"] = name;
//       }
//     } else {
//       acc["price"] = price;
//       acc["name"] = name;
//     }

//     return acc;
//   },
//   { price: 0, name: "" }
// );

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
];

// const usersObj = users.reduce((acc, curr) => {
//   const { name, age } = curr;
//   acc[name] = age;
//   return acc;
// }, {});

const company = {
  name: "TechCorp",
  departments: {
    engineering: {
      manager: "Alice",
      employees: [
        { name: "Bob", salary: 70000 },
        { name: "Charlie", salary: 80000 },
      ],
    },
    marketing: {
      manager: "Eve",
      employees: [
        { name: "David", salary: 50000 },
        { name: "Frank", salary: 55000 },
      ],
    },
  },
};

// const highestPayedEmployee = Object.keys(company.departments)
//   .reduce((acc, curr) => {
//     acc = [...acc, ...company.departments[curr].employees];
//     return acc;
//   }, [])
//   .reduce((acc, curr) => {
//     const { name, salary } = curr;
//     if (!acc["salary"]) {
//       acc["salary"] = salary;
//       acc["name"] = name;
//     } else {
//       if (salary > acc["salary"]) {
//         acc["salary"] = salary;
//         acc["name"] = name;
//       }
//     }

//     return acc;
//   }, {});

const users1 = {
  user1: { name: "Alice", active: true },
  user2: { name: "Bob", active: false },
  user3: { name: "Charlie", active: true },
};

// const activeUsers = Object.keys(users1).reduce((acc, curr) => {
//   const {active} = users1[curr];
//   if(active){
//     acc[curr] = users1[curr];
//   }
//   return acc;
// }, {});

const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};

const obj2 = {
  b: 4,
  c: 5,
  d: 6,
};
// merge 2 obj, if any conflict then large value should percist
// const mergedOject = Object.keys(obj1).reduce((acc, key) => {
//   if(!obj2[key]){
//     acc[key] = obj1[key];
//   } else {
//     acc[key] = Math.max(obj1[key], obj2[key]);
//   }
//   return acc;
// }, {});

// Object.keys(obj2).forEach((key)=> {
//   if(!mergedOject[key]){
//     mergedOject[key] = obj2[key];
//   } else {
//     mergedOject[key] = Math.max(obj1[key], obj2[key]);
//   }
// });

const data = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
};
//Recursively counts all keys in a nested object.

function recCount(data) {
  if (typeof data !== "object" || data === null) {
    return 0;
  }

  return Object.keys(data).reduce((acc, key) => {
    acc += 1;

    if (typeof data[key] === "object" && data[key] !== null) {
      acc += recCount(data[key]);
    }
    return acc;
  }, 0);
}


// object flattern

const input = {
  user: {
    name: "Alice",
    address: {
      city: "Delhi",
      pin: 110011
    },
    course: ["Java", "Javascript"],
  }
};

function flatternObject(obj, prefix = "", result = {}) {
  for(let key in obj){
    const value = obj[key];
    const fullKey = prefix ? `${prefix}.${key}` : key;

    if(typeof value === 'object' && value !== null && !Array.isArray(value)){
      flatternObject(value, fullKey, result);
    } else {
      result[fullKey] = value;
    }
  }
  return result;
}


// closures
function counter() {
  let counter = 0;
  return function (){
    return ++counter;
  }
}


const counter1 = counter();
const counter2 = counter();
// console.log("counter 1 => ",counter1());
// console.log("counter 2 => ",counter2());
// console.log("counter 1 => ", counter1());


// infinite currying

// console.log(add(1)(2)(3)(4)(5)());  // Output: 15
// console.log(add(10)(-5)(3)(2)());  // Output: 10

function add(a) {
  let sum = a;
  function inner(b) {
    if(b === undefined) return sum;
    sum += b;
    return inner;
  }
  return inner;
}


console.log(add(1)(2)(3)(4)(5)());  // Output: 15
console.log(add(10)(-5)(3)(2)());  // Output: 10



// Create a function createExpiringObject(obj, timeout) that returns a proxy object.
// All properties should automatically delete themselves after `timeout` milliseconds.

// const user = createExpiringObject({ name: "Rahul", age: 30 }, 2000);

// console.log(user.name); // "Rahul"
// setTimeout(() => console.log(user.name), 3000); // undefined

// ?? pending

     