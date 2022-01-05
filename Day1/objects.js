let john = {
    name: "John",
    sayHi: function() {
      console.log("Hi buddy!");
    }
  };
  
//   john.sayHi();

  // optationl chaining 

  let user = null;

console.log( user?.address ); // undefined
console.log( user?.address.street ); 