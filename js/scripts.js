$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();
      var form1 = $("#input1").val();
      var form2 = $("#input2").val();
      var form3 = $("#input3").val();
      var form4 = $("#input4").val();
      var favThingsArray = [form1,form2, form3, form4];
   
      favThingsArray.push($("#input5").val());


      console.log(favThingsArray);
  
      
      // $('#myList').append("<li>" + newArray[0] + "</li>");
    
      $(".display").show();
      $('.display').text(favThingsArray)

  });


});