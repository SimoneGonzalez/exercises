if (true) {

}
else if (true) {

}

else {

}
//or
hbfjhdss || sjdkhduhf
//and
&&

//strict equals
===

//less than or equal to
<=

//greater than or equal to
>=

//not equal to
!==













var name = prompt('What is your name?');
alert('Hello World! ' + name);
console.log('Hello World!');

var getFood = function() {
  var myFavoriteFood = prompt('What do you like to eat?').toLowerCase();

  if (myFavoriteFood === 'sushi') {
    alert('Yay! Let\'s get food!');
  } else {
    console.log('maybe next time.');
  }
}
var myAge = prompt('How old are you?');

var ageCheck = function() {
  if(parseInt(myAge) === 24) {
    getFood();
  }
  else if(parseInt(myAge) === 21) {
    alert('Meh, you are ok');
  }
  else {
    alert('Too bad');
  };
};

ageCheck();


var getFood = function() {
  var myFavoriteFood = prompt('What do you like to eat?');

  if (myFavoriteFood === 'sushi') {
    alert('Yay! Let\'s get food!');
  } else {
    console.log('maybe next time.');
  }
}
