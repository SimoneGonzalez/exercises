//.map()
  //order matters
  //function called once on each item in array
  //returns array

//console.log your array if you want to see the output
//1. input: array of numbers, output: array of numbers multiplied by 5

//2. input: array of strings, output: array of strings reversed .reverse()

var stringArr = ["Hello", "there", "here"];

var newStrings = stringArr.map(function(str) {
     return str.split("").reverse().join("");
});

console.log(newStrings);
//home: input = array of strings, output = array of length of strings




//.filter()
  //function called on each item in array
  //returns array of elements that pass test in function


//3. input: array of numbers, output: array of even numbers

//4. input: array of strings, output: array of strings longer than 4 characters




//.reduce()
//applies function on each value in array to reduced array to single value


//home. input: array of strings, output: sum of length of strings










// var answerLogger = function(fn) {
//   var answer = fn();
//   $('#answer').text(answer);
// }
//takes function as input
//runs function that was passed in
//puts return value in div#answer


//test using the following:
// answerLogger();
// answerLogger(function() {
//   return "some new text";
// });


//example from browser
// var runner = function(fn) {
//   console.log('Invoking a new function');
//   fn();
// }

//create a function
//takes array as input
//append each array as a list item into an <ol></ol> inside #answer

var funcArray = [function(){return "thing 1"},function(){return "thing2"},function(){return "thing 3"}];

var answerLogger = function(arr) {
  //put <ol></ol> in #answer
  $("#answer").html("<ol></ol>");

  //for each item in array, append to ol inside #answer
  arr.forEach(function(fn) {
    var answer = fn();
    $("#answer > ol").append("<li>" + answer + "</li>");
  })
}

answerLogger(funcArray);

//secretKeeper
//defines var secret
//takes two strings as args
//append strings to #answer with secret in between

var secretKeeper = function(string1, string2) {
  var secret = "You can't find meeee";

  var publicPhrase = string1 + " " + secret + " " + string2;

  $("#answer").append(publicPhrase);
}

secretKeeper("this is param 1", "this is param 2");
