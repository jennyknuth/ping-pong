var app = angular.module("pingPong", []);

app.controller("PingPong", function($scope) {

  $scope.players = [
    {player: "Player 1", score: 0, serving: true, servingCounter: 0, win: undefined},
    {player: "Player 2", score: 0, serving: false, servingCounter: 0, win: undefined}
  ]

  $scope.serveCounter = 0;
  
  $scope.addScore = function(player) {
    console.log('clicked!', player);
    if (player.score <= 10 && player.win != false) {
      $scope.serveCounter++
      player.score++
      if (player.score === 11) {
        player.win = true
        if (player.player === "Player 1") {
          $scope.players[1].win = false
        } else {
          $scope.players[0].win = false
        }
        console.log('winner!', player.player);
        return;
      }
      console.log('score!', player.score, $scope.serveCounter);
      if ($scope.serveCounter === 2){ // check if it is time to switch servers
        // switch servers
        if (player.player === "Player 1" && player.serving === false) {
          $scope.players[0].serving = true
          $scope.players[1].serving = false
        } else {
          $scope.players[0].serving = false
          $scope.players[1].serving = true
        }
        $scope.serveCounter = 0;
        console.log('switch server', player[0], player[1]);
      }
    }
  }

  $scope.resetGame = function (){
    $scope.players = [
      {player: "Player 1", score: 0, serving: true, servingCounter: 0, win: undefined},
      {player: "Player 2", score: 0, serving: false, servingCounter: 0, win: undefined}
    ]
  }
})
