var name = prompt('What is your name?');
alert('Hello World! ' + name);
console.log('Hello World!');

var myAge = prompt('How old are you?');

var ageCheck = function() {
  if(parseInt(myAge) === 24) {
    alert('You are awesome!');
  }
  else if(parseInt(myAge === 21)) {
    alert('Meh, you are ok');
  }
  else {
    alert('Too bad');
  };
};

ageCheck();