$(document).ready(function() {
  $("#userWords").submit(function(event) {

    var userSentence = $("#userSentence1").val();
    alert(userSentence);
    var userWord = userSentence.split(' ');
    alert(userWord[2]);
    var lettersLong = [];
    userWord.forEach(function(str) {
      if (str.length >= 3) {
        lettersLong.push(str);
      }
    });
    alert(lettersLong);
    lettersLong.reverse(' ');
    var completedSentenceFunction = lettersLong.join(' ');
    alert(completedSentenceFunction);
    $("#sentenceEdit").append("<p>" + userSentence + " " + completedSentenceFunction + "</p>");

    event.preventDefault();
  });
});
