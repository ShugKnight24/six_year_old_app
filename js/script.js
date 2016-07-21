var wordApp = angular.module("wordApp", []);

wordApp.controller("wordAppController",["$scope", function($scope){
// word array
  $scope.wordArray = ["pineapple","wu-tang","urban","apple","doge","much","wow","Josh","Shug","amazed"];
// phrase array
  $scope.phraseArray = ["Mack daddy pho life", "what does this even mean", "I wish we had fresh pineapple juice"];
// styles for word array ==> target via class
  $scope.wordDecoration = ["yellow","red","blue","green","spin","underline"];
// styles for phrase array
  $scope.phraseDecoration = ["yellow","red","blue","green","spin","underline"];

$scope.randomText = [];
$scope.randomStyle = [];

//Check if wordArray is randomizing
//  console.log(randomWord)

$scope.addRandomWord = function(){
  $scope.randomWord = $scope.wordArray[Math.floor(Math.random() * $scope.wordArray.length)];
    $scope.randomText.push($scope.randomWord + " ");
    console.log($scope.randomText);
  };
$scope.addRandomPhrase = function(){
  $scope.randomPhrase = $scope.phraseArray[Math.floor(Math.random() * $scope.phraseArray.length)];
    $scope.randomText.push($scope.randomPhrase + " ");
    console.log($scope.randomText);
  };
$scope.addRandomWordDecoration = function(){
  $scope.randomDecoration = $scope.wordDecoration[Math.floor(Math.random() * $scope.wordDecoration.length)];
    $scope.randomText.push($scope.randomWord + " ");
    $scope.randomStyle.push($scope.randomDecoration);
    console.log($scope.randomText);
    console.log($scope.randomStyle);
};
$scope.addRandomPhraseDecoration = function(){
  $scope.randomPhraseDecoration = $scope.phraseDecoration[Math.floor(Math.random() * $scope.phraseDecoration.length)];
    $scope.randomStyle.push($scope.randomPhraseDecoration);
    $scope.randomText.push($scope.randomPhrase + " ");
    console.log($scope.randomText);
    console.log($scope.randomStyle);
  };
}]);
