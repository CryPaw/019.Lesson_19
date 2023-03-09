function makeSum(x) {
    return function(y) {
      return x + y;
    };
  };
  
  var sum3 = makeSum(0);
  var sum5 = makeSum(5);
  var sum20 = makeSum(20);
  
  console.log(sum3(3));  // 3
  console.log(sum5(3)); // 8
  console.log(sum20(8)); // 28