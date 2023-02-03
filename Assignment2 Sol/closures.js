/*  Write a function that would allow you to do this. (Use closures)
  var addSix = createBase(6);
  addSix(10); // returns 16
  addSix(21); // returns 27         */

  function createBase(a){
    return function (b){
        return a + b;
    }
  }

  var addSix = createBase(6);
  console.log(addSix(10));
  console.log(addSix(21));