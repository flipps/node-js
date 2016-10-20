var isValid = false;
var toggleBoolean = function (x) {
  if(typeof x === 'boolean') {
    return !x;
  } else {
    console.log('Warning: Not a boolean!');
  }
}

var newBoolean = toggleBoolean(isValid);
console.log(newBoolean);
newBoolean = toggleBoolean('lol');
console.log(newBoolean);
