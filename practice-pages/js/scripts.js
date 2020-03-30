$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    console.log(blanks)

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $("#story").show();

    
  });
});