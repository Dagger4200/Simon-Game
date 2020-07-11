var userClickedPattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var level = 0;

var start = false;


$(".btn").click(function() {
  var userChoosenColor = $(this).attr("id");
  userClickedPattern.push(userChoosenColor);
  console.log(userClickedPattern);
  playSound(userChoosenColor);
  animatePress(userChoosenColor);
  checkAnswer(userClickedPattern.length - 1);
});


$(".abc").keypress(function(event) {
  if (!start) {
    $("#level-title").text("Level " + level);
    nextSequence();
    start = true;
  }
});


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor((Math.random() * 4));
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  console.log(gamePattern);
  playSound(randomChosenColor);
}


function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


function animatePress(currentColor) {
  $("." + currentColor).addClass("pressed");
  setTimeout(function() {
    $("." + currentColor).removeClass("pressed");
  }, 100);
};


function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
    console.log("success");
    if (userClickedPattern.length == gamePattern.length) {
      setTimeout(function() {
        nextSequence()
      }, 1000);
    }
  } else {
    $(".abc").addClass("game-over");
    console.log("failure");
    $("#level-title").text("Game Over, press any key to continue!!!");
    playSound("wrong");
    setTimeout(function() {
      $(".abc").removeClass("game-over");
    }, 200);
    startover();
  }
}


function startover(){
  level=0;
  gamePattern=[];
  start=false;
}




// $(".btn").click(function(event) {
//   clickedColor=this.innerHTML;
//   switch (clickedColor) {
//     case "green":
//       $(".green").fadeOut(250).fadeIn(250);
//       break;
//     case "red":
//       $(".red").fadeOut(250).fadeIn(250);
//       break;
//     case "yellow":
//       $(".yellow").fadeOut(250).fadeIn(250);
//       break;
//     case "blue":
//       $(".blue").fadeOut(250).fadeIn(250);
//       break;
//     default:alert(event.innerHTML);
//
//   }
//
// });

//var gamePattern=[randomChosenColor];
// $("button").click(function(){
//   $("row").css("color","yellow");
// });


// $(".btn").click(function(event) {
// var classList = $(".btn").attr("class");
// console.log(classList);
// for (var i = 0; i < classList.length; i++) {
//     if (classList[i] === 'green') {
//         $(".green").fadeOut(250).fadeIn(250);
//     }
//     if (classList[i] === 'red') {
//         $(".red").fadeOut(250).fadeIn(250);
//     }
//     if (classList[i] === 'yellow') {
//         $(".yellow").fadeOut(250).fadeIn(250);
//     }
//     if (classList[i] === 'blue') {
//         $(".blue").fadeOut(250).fadeIn(250);
//     }
// }
// });
