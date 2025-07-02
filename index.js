function makeAdder (x){
  return function (y) {
    return x + y;
  }
}

const addFive = makeAdder(5);
const addTen = makeAdder(10);
// console.log(addTen(3));
// console.log(addFive(4));

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
      lng: -74.0060
    }
  },
  settings: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
      push: {
        enabled: true,
        frequency: "daily"
      }
    }
  },
  preferences: {
    language: "en",
    timezone: "America/New_York"
  }
};


function printObject(obj){
  if(!obj){
    return;
  }

  Object.keys(obj).map(key => {
    if(typeof obj[key] != "object"){
      console.log(obj[key])
    } else {
      printObject(obj[key]);
    }
  });
}

printObject(userProfile);