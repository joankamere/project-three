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
$(document).ready(function(){
    $("#work1").mouseover(function(){
      $("#hover1").show();
    }).mouseout(function(){
      $("#hover1").hide();
    });
});
$(document).ready(function(){
    $("#work2").mouseover(function(){
      $("#hover2").show();
    }).mouseout(function(){
      $("#hover2").hide();
    });
});
$(document).ready(function(){
    $("#work3").mouseover(function(){
      $("#hover3").show();
    }).mouseout(function(){
      $("#hover3").hide();
    });
});
$(document).ready(function(){
    $("#work4").mouseover(function(){
      $("#hover4").show();
    }).mouseout(function(){
      $("#hover4").hide();
    });
});
$(document).ready(function(){
    $("#work5").mouseover(function(){
      $("#hover5").show();
    }).mouseout(function(){
      $("#hover5").hide();
    });
});
$(document).ready(function(){
    $("#work6").mouseover(function(){
      $("#hover6").show();
    }).mouseout(function(){
      $("#hover6").hide();
    });
});
$(document).ready(function(){
    $("#work7").mouseover(function(){
      $("#hover7").show();
    }).mouseout(function(){
      $("#hover7").hide();
    });
});
$(document).ready(function(){
    $("#work8").mouseover(function(){
      $("#hover8").show();
    }).mouseout(function(){
      $("#hover8").hide();
    });
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