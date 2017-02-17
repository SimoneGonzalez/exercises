var stringPrinter = function( starterString ) {
  $('#output').prepend("<p>" + starterString +"</p>");
}

var funnySentence = function(noun, adjective, verb, adverb) {
  var sentence = "The " + adjective + " " + noun + " " + verb + " " + adverb + ".";

  stringPrinter(sentence);
}

 var doThis = function() {
   var i = 0;
   while(i<5) {
     funnySentence("popcorn", "glamorous", "ran", "gently");
     i++;
   }
 }

document.querySelector('#target').addEventListener('click', doThis);
// document.querySelector('#target').addEventListener('click', function() {
//   console.log('same deal');
// });

$('#target').on('click', function() {
  console.log('You clicked the div with the id target');
});

$('div').click(function() {
  $('div p').show().css('color', 'red').text('booyah');
})
