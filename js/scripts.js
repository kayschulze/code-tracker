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
  frontScore = 0;
  if (questionOneTracker === "f") {
    frontScore += frontScore;
  }
  if (questionTwoTracker === "f") {
    frontScore += frontScore;
  }
  if (questionThreeTracker === "f") {
    frontScore += frontScore;
  }
  if (questionFourTracker === "f") {
    frontScore += frontScore;
  }
  return frontScore;
}

var backScore = function() {
  backScore = 0;
  if (questionOneTracker === "b") {
    backScore += backScore;
  }
  if (questionTwoTracker === "b") {
    backScore += backScore;
  }
  if (questionThreeTracker === "b") {
    backScore += backScore;
  }
  if (questionFourTracker === "b") {
    backScore += backScore;
  }
  return backScore;
}

var frontOrBack = function(frontScore, backScore) {
  if (backScore > frontScore) {
    $(".back-end").show();
  }
  else if (frontScore > backScore) {
    $(".css-design").show();
  }
  else {
    $(".error").show();
  }
}

$(function() {
  $("#codingsurvey").submit(function(event) {
    alert("I'm lovin' it!");
    event.preventDefault();
    var question1Val = $("input:radio[name=question1]:checked").val());
    var question2Val = $("input:radio[name=question2]:checked").val());
    var question3Val = $("input:radio[name=question3]:checked").val());
    var question4Val = $("input:radio[name=question4]:checked").val());
    var question5Val = $("input:radio[name=question5]:checked").val());
    var question6Val = $("input:radio[name=question6]:checked").val());
    var question7Val = $("input:radio[name=question7]:checked").val());

    var frontEnd = frontScore(question1Val, question2Val, question3Val, question4Val);
    var backEnd = backScore(question1Val, question2Val, question3Val, question4Val);

    frontOrBack(frontScore, backScore);

    var cSharpTracker = 0;
    var javaTracker = 0;
    var phpTracker = 0;
    var rubyTracker = 0;

  });
});
