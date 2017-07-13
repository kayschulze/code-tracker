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

var frontScore = function(questionOneTracker, questionTwoTracker, questionThreeTracker) {
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
  return frontScore;
};

var backScore = function(questionOneTracker, questionTwoTracker, questionThreeTracker) {
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
  return backScore;
};

var frontOrBack = function(frontScore, backScore) {
  if (backScore > frontScore) {
    return "back";
  }
  else {
    return "front";
  }

};

var cSharpScore = function(question4Val, question5Val, question6Val, question7Val) {
  cSharpTracker = 0;
  if (question4Val == "microsoft") {
    cSharpTracker += 1;
  }
  if (question5Val == "internalSoftware") {
    cSharpTracker += 1;
  }
  if (question6Val == "software") {
    cSharpTracker += 1;
  }
  if (question7Val == "large") {
    cSharpTracker += 1;
  }
  return cSharpTracker;
};

var javaScore = function(question4Val, question5Val, question6Val, question7Val) {
  javaTracker = 0;
  if (question4Val == "oracle") {
    cSharpTracker += 1;
  }
  if (question5Val == "highPerformance") {
    javaTracker += 1;
  }
  if (question6Val == "mobile") {
    javaTracker += 1;
  }
  if (question7Val == "enterprise") {
    javaTracker += 1;
  }
  return javaTracker;
};

var phpScore = function(question4Val, question5Val, question6Val, question7Val) {
  phpTracker = 0;
  if (question4Val == "generalWeb") {
    cSharpTracker += 1;
  }
  if (question5Val == "professionalWeb") {
    phpTracker += 1;
  }
  if (question6Val == "contentManagement") {
    phpTracker += 1;
  }
  if (question7Val == "government") {
    phpTracker += 1;
  }
  return phpTracker;
};

var rubyScore = function(question4Val, question5Val, question6Val, question7Val) {
  rubyTracker = 0;
  if (question4Val == "automemory") {
    cSharpTracker += 1;
  }
  if (question5Val == "creatingAccounts") {
    rubyTracker += 1;
  }
  if (question6Val == "interactiveWeb") {
    rubyTracker += 1;
  }
  if (question7Val == "startup") {
    rubyTracker += 1;
  }
  return rubyTracker;
};

var bestLanguage = function(cSharpScore, javaScore, phpScore, rubyScore) {
  if (cSharpScore >= javaScore && cSharpScore >= phpScore && cSharpScore > rubyScore) {
    hideSpecifics();
    $(".c-sharp").show();
  }
  if (javaScore >= cSharpScore && javaScore >= phpScore && javaScore >= rubyScore) {
    hideSpecifics();
    $(".java").show();
  }
  if (phpScore >= cSharpScore && phpScore >= javaScore && phpScore >= rubyScore) {
    hideSpecifics();
    $(".php").show();
  }
  if (rubyScore >= cSharpScore && rubyScore >= javaScore && rubyScore >= phpScore) {
    hideSpecifics();
    $(".ruby").show();
  }
};

var hideSpecifics = function () {
  $(".css-design").hide();
  $(".c-sharp").hide();
  $(".java").hide();
  $(".php").hide();
  $(".ruby").hide();
};

$(function() {
  $(".clickable-css").click(function() {
    hideSpecifics();
    $(".css-design").show();
  });

  $(".clickable-csharp").click(function() {
    hideSpecifics();
    $(".c-sharp").show();
  });

  $(".clickable-java").click(function() {
    hideSpecifics();
    $(".java").show();
  });

  $(".clickable-php").click(function() {
    hideSpecifics();
    $(".php").show();
  });

  $(".clickable-ruby").click(function() {
    hideSpecifics();
    $(".ruby").show();
  });

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

    var frontEnd = frontScore(questionOneTracker, questionTwoTracker, questionThreeTracker);
    var backEnd = backScore(questionOneTracker, questionTwoTracker, questionThreeTracker);

    var toggle = frontOrBack(frontEnd, backEnd);

    cSharpScore = cSharpScore(question4Val, question5Val, question6Val, question7Val);
    javaScore = javaScore(question4Val, question5Val, question6Val, question7Val);
    phpScore = phpScore(question4Val, question5Val, question6Val, question7Val);
    rubyScore = rubyScore(question4Val, question5Val, question6Val, question7Val);

    if (toggle === "front") {
      $(".css-design").show();
    }
    else {
      bestLanguage(cSharpScore, javaScore, phpScore, rubyScore);
    }


  });
});
