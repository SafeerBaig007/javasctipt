
function sayHiBye(firstName, lastName) {

    // helper nested function to use below
    function getFullName() {
      return firstName + " " + lastName;
    }
  
    console.log( "Hello, " + getFullName() );
    console.log( "Bye, " + getFullName() );
  
  }
  sayHiBye('safeer','baig')
  ///////
  function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  
  console.log( makeCounter() ); // 0
  console.log( makeCounter() ); // 1
  console.log( makeCounter() ); // 2