var questionOneTracker = function(question1Val) {
  if (question1Val === "layout" || question1Val === "fontstyle") {
    return "f";
  }
  else {
    return "b";
  }
}

var questionTwoTracker = function(question2Val) {
  if (question2Val === "rearrange" || question2Val === "swatches") {
    return "f";
  }
  else {
    return "b";
  }
}

var questionThreeTracker = function(question3Val) {
  if (question3Val === "art") {
    return "f";
  }
  else {
    return "b";
  }
}
var questionFourTracker = function(question4Val) {
  if (question4Val === "design") {
    return "f";
  }
  else {
    return "b";
  }
}
var questionFiveTracker = function(question5Val) {
  if (question5Val === "internet") {
    return 0;
  }
}
var questionSixTracker = function(question6Val) {
  if (question6Val === "layout" || question1Val === "fontstyle") {
    return 0;
  }
}
var questionSevenTracker = function(question7Val) {
  if (question7Val === "layout" || question1Val === "fontstyle") {
    return 0;
  }
}

var frontScore = function() {

}

var backScore = function() {

}

var frontOrBack = function(frontScore, backScore) {
  if (backScore > frontScore) {
    return "back";
  }
  else if (frontScore > backScore) {
    return "front";
  }
  else {
    return "either";
  }
}


$(function() {
  $("#choose-language").submit(function(event) {
    event.preventDefault();
    var question1Val = $("#question1").val());
    var question2Val = $("#question2").val());
    var question3Val = $("#question3").val());
    var question4Val = $("#question4").val());
    var question5Val = $("#question5").val());
    var question6Val = $("#question6").val());
    var question7Val = $("#question7").val());

    var frontEnd = 0;
    var backEnd = 0;
    var cSharpTracker = 0;
    var javaTracker = 0;
    var phpTracker = 0;
    var rubyTracker = 0;

  })
})
