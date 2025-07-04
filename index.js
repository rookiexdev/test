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
  electronics: ["Mobile", "Laptop", "Smart Watch"],
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
      pin: 110011,
    },
    course: ["Java", "Javascript"],
  },
};

function flatternObject(obj, prefix = "", result = {}) {
  for (let key in obj) {
    const value = obj[key];
    const fullKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
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
  return function () {
    return ++counter;
  };
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
    if (b === undefined) return sum;
    sum += b;
    return inner;
  }
  return inner;
}

// console.log(add(1)(2)(3)(4)(5)()); // Output: 15
// console.log(add(10)(-5)(3)(2)()); // Output: 10

function deepEqualObject(p1, p2) {
  if (p1 === p2) return true;

  if (
    typeof p1 !== "object" ||
    p1 === null ||
    typeof p2 !== "object" ||
    p2 === null
  )
    return false;

  const keys1 = Object.keys(p1);
  const keys2 = Object.keys(p2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (!keys2.includes(key)) return false;

    const val1 = p1[key];
    const val2 = p2[key];

    const isBothAreObject =
      typeof val1 === "object" &&
      typeof val2 === "object" &&
      val1 !== null &&
      val2 !== null;

    if (isBothAreObject) {
      if (!deepEqualObject(val1, val2)) return false;
    } else {
      if (val1 !== val2) return false;
    }
  }
  return true;
}

const person1 = {
  name: "John",
  details: {
    age: 30,
    skills: {
      primary: "JavaScript",
    },
  },
};

const person2 = {
  name: "John",
  details: {
    age: 30,
    skills: {
      primary: "JavaScript",
    },
  },
};

const person3 = {
  name: "John",
  details: {
    age: 31,
    skills: {
      primary: "JavaScript",
    },
  },
};

// console.log(deepEqualObject(person1, person2)); // true ✅
// console.log(deepEqualObject(person2, person3)); // false ❌

// Create a function createExpiringObject(obj, timeout) that returns a proxy object.
// All properties should automatically delete themselves after `timeout` milliseconds.

// const user = createExpiringObject({ name: "Rahul", age: 30 }, 2000);

// console.log(user.name); // "Rahul"
// setTimeout(() => console.log(user.name), 3000); // undefined

// ?? pending

function valueOfFunction(a) {
  return function (b) {
    return function (c) {
      return {
        valueOf() {
          return a + b + c;
        },
      };
    };
  };
}

// console.log(valueOfFunction(1)(2)(3).valueOf());

// curring function

function addTotal(a) {
  return function (b) {
    if (b === undefined) return a;
    return addTotal(a + b);
  };
}

// console.log(addTotal(1)(2)(3)());

function valueOfFun(a) {
  let sum = a;
  function inner(b) {
    sum += b;
    return inner;
  }
  inner.valueOf = () => sum;
  return inner;
}

// console.log(valueOfFun(1)(2)(3)(4).valueOf());

function calculateValue(val) {
  let total = val;
  const obj = {
    add(num) {
      total += num;
      return obj;
    },
    sub(num) {
      total -= num;
      return obj;
    },
    mul(num) {
      total *= num;
      return obj;
    },
    div(num) {
      if (num === 0) throw new Error("Cannot divide by zero");
      total /= num;
      return obj;
    },
    value() {
      return total;
    },
  };
  return obj;
}

// console.log(calculateValue(5).add(2).sub(2).mul(5).div(5).value());

const { add: addition, sub, value } = calculateValue(10);

// addition(10).sub(-10);
// console.log(value());

function once(fn) {
  let count = 0;
  return function () {
    if (count == 0) {
      count++;
      fn();
    }
  };
}

const doOnce = once(() => console.log("hello"));
// doOnce();
// doOnce();

// custom setInterval using setTimeOut;

function customSetInterval(fn, delay) {
  let intervalId = 0;
  let stop = false;

  function repeatFun() {
    intervalId = setTimeout(() => {
      if (stop) return;
      fn();
      repeatFun();
    }, delay);
  }

  intervalId = setTimeout(repeatFun, delay);

  return {
    clear() {
      stop = true;
      clearTimeout(intervalId);
    },
  };
}

function customIntervalTest() {
  let count = 0;
  const interval = customSetInterval(() => {
    console.log("Ticking..", ++count);
    if (count === 5) {
      interval.clear();
    }
  }, 1000);
}

function objFlattern(obj, prefix = "", result = {}) {
  for (let key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    const value = obj[key];

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      objFlattern(value, fullKey, result);
    } else {
      result[fullKey] = value;
    }
  }
  return result;
}

// console.log(objFlattern(userProfile));

function retry(fn, retries, delay = 0) {
  return new Promise((resolve, reject) => {
    function attempt(remaining) {
      try {
        const result = fn();
        if (result instanceof Promise) {
          result.then(resolve).catch((err) => {
            if (remaining <= 0) {
              reject(err);
            } else {
              setTimeout(() => {
                attempt(remaining - 1);
              }, delay);
            }
          });
        } else {
          resolve(result);
        }
      } catch (error) {
        if (remaining <= 0) reject(error);
        setTimeout(() => attempt(retries - 1), delay);
      }
    }
    attempt(retries);
  });
}

let count = 0;
function unstableFn() {
  return new Promise((resolve, reject) => {
    count++;
    console.log("Try count ", count);
    count < 9 ? reject("Opps!") : resolve("success");
  });
}

function demo() {
  retry(unstableFn, 10, 2000).then(console.log).catch(console.error);
}

// Implement sleep(ms) function

function sleep(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

async function test() {
  await sleep(3000);
  console.log("HI");
}

// Create a Task Scheduler

function delayTask(data, delay) {
  return () =>
    new Promise((resolve) => {
      setTimeout(() => {
        console.log(data);
        resolve(data);
      }, delay);
    });
}

function scheduler() {
  const queue = [];

  const result = {
    add(taskFn) {
      queue.push(taskFn);
      return result;
    },

    async start() {
      // const task = queue.shift();
      // Promise.resolve(task())
      //   .then((data) => {
      //     console.log(data);
      //     if (queue.length > 0) result.start();
      //   })
      //   .catch(console.error);
      for (let task of queue) await task();
    },
  };

  return result;
}

function s1() {
  scheduler()
    .add(delayTask("Print after 2000", 2000))
    .add(delayTask("Print after 1000", 1000))
    .add(delayTask("Print after 500", 500))
    .add(delayTask("Print after 200", 200))
    .start();
}

const flatternPersonObj = {
  id: 12345,
  name: "Jane Doe",
  email: "jane.doe@example.com",
  "address.street": "123 Main St",
  "address.city": "New York",
  "address.state": "NY",
  "address.postalCode": "10001",
  "address.geo.lat": 40.7128,
  "address.geo.lng": -74.006,
  "settings.theme": "dark",
  "settings.notifications.email": true,
  "settings.notifications.sms": false,
  "settings.notifications.push.enabled": true,
  "settings.notifications.push.frequency": "daily",
  "preferences.language": "en",
  "preferences.timezone": "America/New_York",
  electronics: ["Mobile", "Laptop", "Smart Watch"],
};

function unFlattern(obj) {
  const result = {};
  for (let flatKey in obj) {
    const keys = flatKey.split(".");

    let current = result;
    keys.forEach((key, index) => {
      if (index == keys.length - 1) {
        current[key] = obj[flatKey];
      } else {
        if (!current[key] && typeof current[key] !== "object") {
          current[key] = {};
        }
        current = current[key];
      }
    });
  }

  return result;
}

function unFlattern2(obj) {
  const result = {};

  for (let flatKey in obj) {
    let curr = result;
    const keys = flatKey.split(".");
    keys.forEach((key, index) => {
      if (index == keys.length - 1) {
        curr[key] = obj[flatKey];
      } else {
        if (!curr[key] && typeof curr[key] !== "object") {
          curr[key] = {};
        }
        curr = curr[key];
      }
    });
  }

  return result;
}

console.log(unFlattern2(flatternPersonObj));
