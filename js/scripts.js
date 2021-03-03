  
$(document).ready(function() {
  $(".click").click(function() {
    $("#design-image").toggle();
    $("#design").toggle();
  });
});
  $(document).ready(function() {
    $(".clickable").click(function() {
      $("#development-image").toggle();
      $("#development").toggle();
    });
  });
  $(document).ready(function() {
    $(".clicks").click(function() {
      $("#product-image").toggle();
      $("#pm").toggle();
    });
  });
  $(document).ready(function () {
    $(".mouse").hover(function () {
      $(this).animate({ opacity: '1' });
    },
      function () {
        $(this).animate({ opacity: '0' });
      })
  });

$(document).ready(function(){
  $("form#formXYZ").submit(function(event){
    var name = $("input#ALT1").val();
    var email = $("input#ALT0").val();
    var message = $("textarea#comment").val();
    if ($("input#ALT1").val() && $("input#ALT0").val()){
      alert (name + ", we have received your message. Thank you for reaching out to us.");
    }
    else {
      alert("Enter your name and email!");
    }
  });
});