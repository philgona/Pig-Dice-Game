//BUSINESS LOGIC

    function Player(name) {
    	this.name = name;
      this.turnScore = 0;
      this.totalScore = 0;
      this.winner = false;
    }

    Player.prototype.reset = function() {
      this.turnScore = 0;
      this.totalScore = 0;
    }

    Player.prototype.setToZero = function() {
    	this.turnScore = 0;
    }

    Player.prototype.addTurnScore = function() {
    	this.turnScore += rollNumber;
      if (this.turnScore + this.totalScore >= 100) {
        this.winner = true;
      }
    }

    Player.prototype.addTotalScore = function() {
    	this.totalScore += this.turnScore;
      this.turnScore = 0;
    }

    function roll1() {
      min = Math.ceil(1);
      max = Math.floor(6);
      rollNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      compare1();
    }

    function hold1() {
    	player1.addTotalScore();
    }

    function compare1() {
    	if (rollNumber === 1) {
      	player1.setToZero();
      } else {
      	player1.addTurnScore();
      }
    }

    function roll2() {
      min = Math.ceil(1);
      max = Math.floor(6);
      rollNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      compare2();
    }

    function hold2() {
      player2.addTotalScore();
    }

    function compare2() {
      if (rollNumber === 1) {
        player2.setToZero();
      } else {
        player2.addTurnScore();
      }
    }

    var rollNumber;
    var player1;
    var player2;

//UI Logic
$(document).ready(function() {
  $("#form-one").submit(function(event) {
    event.preventDefault();

    var inputName1 = $("#player1-name").val().trim();
    var inputName2 = $("#player2-name").val().trim();


    $("#game-stats").show();


    player1 = new Player(inputName1);
    player2 = new Player(inputName2);

    $("#output-name1").text(player1.name);
    $("#output-name2").text(player2.name);

    $("#player1-turn").addClass("blue-background");
    $("#player1-buttons").show();
    $("#player2-buttons").hide();

    $("#roll-1").click(function(event) {
      roll1();
      $("#roll-number-display").text(rollNumber);
      $("#turn-score1").text(player1.turnScore);
      if (player1.winner === true) {
        alert(player1.name + " is da' winner, yo!");
      }
      if (rollNumber === 1) {
        $("#player1-buttons").hide();
        $("#player2-buttons").show();
        $("#player2-turn").addClass("blue-background");
        $("#player1-turn").removeClass("blue-background");

      }
    });
    $("#roll-2").click(function(event) {
      roll2();
      $("#roll-number-display").text(rollNumber);
      $("#turn-score2").text(player2.turnScore);
      if (player2.winner === true) {
        alert(player2.name + " is da' winner, yo!");
      }
      if (rollNumber === 1) {
        $("#player1-buttons").show();
        $("#player2-buttons").hide();
        $("#player1-turn").addClass("blue-background");
        $("#player2-turn").removeClass("blue-background");
      }
    });
    $("#hold-1").click(function(event) {
      hold1();
      $("#total-score1").text(player1.totalScore);
      $("#turn-score1").text(player1.turnScore);
      $("#player1-buttons").hide();
      $("#player2-buttons").show();
      $("#player2-turn").addClass("blue-background");
      $("#player1-turn").removeClass("blue-background");

    });
    $("#hold-2").click(function(event) {
      hold2();
      $("#total-score2").text(player2.totalScore);
      $("#turn-score2").text(player2.turnScore);
      $("#player2-buttons").hide();
      $("#player1-buttons").show();
      $("#player1-turn").addClass("blue-background");
      $("#player2-turn").removeClass("blue-background");
    });

    $("#reset").click(function(event) {
      player1.reset();
      player2.reset();
      rollNumber = 0;
      $("#turn-score1").text(player1.turnScore);
      $("#total-score1").text(player1.totalScore);
      $("#turn-score2").text(player2.turnScore);
      $("#total-score2").text(player2.totalScore);
      $("#roll-number-display").text(rollNumber);
      $("#player2-buttons").hide();
      $("#player1-buttons").show();
      $("#player1-turn").addClass("blue-background");
      $("#player2-turn").removeClass("blue-background");
    });

  });
});
