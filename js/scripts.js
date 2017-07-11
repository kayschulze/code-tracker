var questionOneTracker = function(question1Val) {
  if (question1Val === "layout" || question1Val === "fontstyle") {
    return "f";
  }
  else {
    return "b";
  }
};

var questionTwoTracker = function(question2Val) {
  if (question2Val === "rearrange" || question2Val === "swatches") {
    return "f";
  }
  else {
    return "b";
  }
};

var questionThreeTracker = function(question3Val) {
  if (question3Val === "art") {
    return "f";
  }
  else {
    return "b";
  }
};

var questionFourTracker = function(question4Val) {
  if (question4Val === "design") {
    return "f";
  }
  else {
    return "b";
  }
};

var frontScore = function(questionOneTracker, questionTwoTracker, questionThreeTracker, questionFourTracker) {
  frontScore = 0;
  if (questionOneTracker === "f") {
    frontScore += 1;
  }
  if (questionTwoTracker === "f") {
    frontScore += 1;
  }
  if (questionThreeTracker === "f") {
    frontScore += 1;
  }
  if (questionFourTracker === "f") {
    frontScore += 1;
  }
  return frontScore;
};

var backScore = function(questionOneTracker, questionTwoTracker, questionThreeTracker, questionFourTracker) {
  backScore = 0;
  if (questionOneTracker === "b") {
    backScore += 1;
  }
  if (questionTwoTracker === "b") {
    backScore += 1;
  }
  if (questionThreeTracker === "b") {
    backScore += 1;
  }
  if (questionFourTracker === "b") {
    backScore += 1;
  }
  return backScore;
};

var frontOrBack = function(frontScore, backScore) {
  if (backScore > frontScore) {
    $(".back-end").show();
  }
  else if (frontScore > backScore) {
    $(".css-design").show();
  }
  else if (frontScore == backScore) {
    $(".either").show();
    $(".css-design").show();
    $(".back-end").show();
  }
  else {
    $(".error").show();
  }
};

var cSharpScore = function(question5Val, question6Val, question7Val) {
  cSharpTracker = 0;
  if (question5Val == "software") {
    cSharpTracker += 1;
  }
  if (question6Val == "software") {
    cSharpTracker += 1;
  }
  if (question7Val == "large") {
    cSharpTracker += 1;
  }
};

var javaScore = function(question5Val, question6Val, question7Val) {
  javaTracker = 0;
  if (question5Val == "software") {
    javaTracker += 1;
  }
  if (question6Val == "software" || question5Val == "mobile") {
    javaTracker += 1;
  }
  if (question7Val == "large") {
    javaTracker += 1;
  }
};

var phpScore = function(question5Val, question6Val, question7Val) {
  phpTracker = 0;
  if (question5Val == "internet") {
    phpTracker += 1;
  }
  if (question6Val == "web") {
    phpTracker += 1;
  }
  if (question7Val == "government" || "startup") {
    phpTracker += 1;
  }
};

var rubyScore = function(question5Val, question6Val, question7Val) {
  rubyTracker = 0;
  if (question5Val == "internet") {
    rubyTracker += 1;
  }
  if (question6Val == "web") {
    rubyTracker += 1;
  }
  if (question7Val == "startup") {
    rubyTracker += 1;
  }
};

var bestLanguage = function(cSharpScore, javaScore, phpScore, javaScore) {
  if (cSharpScore >= javaScore && cSharpScore >= phpScore && cSharpScore >= rubyScore) {
    $(".c-sharp").show();
  }
  if (javaScore >= cSharpScore && javaScore >= phpScore && javaScore >= rubyScore) {
    $(".java").show();
  }
  if (phpScore >= cSharpScore && phpScore >= javaScore && phpScore >= rubyScore) {
    $(".php").show();
  }
  if (rubyScore >= cSharpScore && rubyScore >= javaScore && rubyScore >= phpScore) {
    $(".ruby").show();
  }
}

$(function() {
  $("#codingsurvey").submit(function(event) {
    event.preventDefault();
    var question1Val = $("input:radio[name=question1]:checked").val();
    var question2Val = $("input:radio[name=question2]:checked").val();
    var question3Val = $("input:radio[name=question3]:checked").val();
    var question4Val = $("input:radio[name=question4]:checked").val();
    var question5Val = $("input:radio[name=question5]:checked").val();
    var question6Val = $("input:radio[name=question6]:checked").val();
    var question7Val = $("input:radio[name=question7]:checked").val();

    questionOneTracker = questionOneTracker(question1Val);
    questionTwoTracker = questionTwoTracker(question2Val);
    questionThreeTracker = questionThreeTracker(question3Val);
    questionFourTracker = questionFourTracker(question4Val);

    var frontEnd = frontScore(questionOneTracker, questionTwoTracker, questionThreeTracker, questionFourTracker);
    var backEnd = backScore(questionOneTracker, questionTwoTracker, questionThreeTracker, questionFourTracker);

    frontOrBack(frontEnd, backEnd);

    cSharpScore(question5Val, question6Val, question7Val);
    javaScore(question5Val, question6Val, question7Val);
    phpScore(question5Val, question6Val, question7Val);
    rubyScore(question5Val, question6Val, question7Val);

    bestLanguage(cSharpScore, javaScore, phpScore, rubyScore);

  });
});
