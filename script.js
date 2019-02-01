// Improvements: Tit for tat?

var playerInteractions = {
  player1: {
    strategy: "",
    points: 0,
    chooseStrategy: function(choice) {
      this.strategy = choice;
    },
  },
  player2: {
    strategy: "",
    points: 0,
    chooseStrategy: function(choice) {
      this.strategy = choice;
    },
  },
  interaction: function() {
    if(this.player1.strategy === "cooperate" && this.player2.strategy === "cooperate") {
      this.player1.points += 3;
      this.player2.points += 3;
    } else if(this.player1.strategy === "cooperate" && this.player2.strategy === "defect") {
      this.player2.points += 5;
    } else if(this.player1.strategy === "defect" && this.player2.strategy === "cooperate") {
      this.player1.points += 5;      
    } else if(this.player1.strategy === "defect" && this.player2.strategy === "defect") {
      this.player1.points += 1;
      this.player2.points += 1;      
    }
  },
  playOneRound: function() {
    var player1Choice = document.getElementById("player1Choice");
    var player2Choice = document.getElementById("player2Choice");
    this.player1.chooseStrategy(player1Choice.value);
    this.player2.chooseStrategy(player2Choice.value);
    this.interaction();
    var pointsDisplay1 = document.getElementById("player1Points");
    var pointsDisplay2 = document.getElementById("player2Points");
    pointsDisplay1.textContent = this.player1.points;
    pointsDisplay2.textContent = this.player2.points;
  },
  clear: function() {
    this.player1.points = 0;
    this.player2.points = 0;
    var pointsDisplay1 = document.getElementById("player1Points");
    var pointsDisplay2 = document.getElementById("player2Points");
    pointsDisplay1.textContent = this.player1.points;
    pointsDisplay2.textContent = this.player2.points;
  },
};
