function XO(str) {
  var str = str.toLowerCase();
  var stringS = str.split("");
  var countX = stringS.reduce( function(a , b){
    return a + (b === 'x');
  }, 0);
  var countO = stringS.reduce( function(a , b){
    return a + (b === 'o');
  }, 0);
  if (countX == countO){
    return true;
  }
  else{
    return false;
  }
}
