var wordApp = angular.module("wordApp", []);

wordApp.controller("wordAppController",["$scope", function($scope){
// Title in heading
  $scope.title ="Six Year Old Talk App!";
// word array
  $scope.wordArray = ["pineapple","wu-tang","urban","apple","doge","much","wow","Josh","Shug","amazed"];
// phrase array
  // $scope.phraseArray = ["Mack daddy pho life", "what does this even mean", "I wish we had fresh pineapple juice"];
// styles for word array ==> target via class
  $scope.wordDecoration = ['red ','blue ','green ','yellow '];
// styles for phrase array
  // $scope.phraseDecoration = ["yellow","red","blue","green","spin","underline"];

$scope.randomText = [];
// $scope.randomStyle = [];



//Check if wordArray is randomizing
//  console.log(randomWord)

$scope.addRandomWord = function(){
    var random = {};
    random.word = $scope.wordArray[Math.floor(Math.random() * $scope.wordArray.length)];
    random.decor = " ";
    $scope.randomText.push(random);
    // console.log($scope.randomText);
  };
// $scope.addRandomPhrase = function(){
//     $scope.randomPhrase = $scope.phraseArray[Math.floor(Math.random() * $scope.phraseArray.length)];
//     $scope.randomText.push($scope.randomPhrase + " ");
//     console.log($scope.randomText);
//   };
$scope.addRandomWordDecoration = function(){
    var random = {};
    random.word = $scope.wordArray[Math.floor(Math.random() * $scope.wordArray.length)];
    random.decor = $scope.wordDecoration[Math.floor(Math.random() * $scope.wordDecoration.length)];
    $scope.randomText.push(random);
    // console.log($scope.randomTextStyle);
    // $scope.randomText.push($scope.randomWord + " ");
    // $scope.randomStyle.push($scope.randomDecoration);
    // console.log($scope.randomText);
    // console.log($scope.randomStyle);
};
// $scope.addRandomPhraseDecoration = function(){
//     $scope.randomPhraseDecoration = $scope.phraseDecoration[Math.floor(Math.random() * $scope.phraseDecoration.length)];
//     $scope.randomStyle.push($scope.randomPhraseDecoration);
//     $scope.randomText.push($scope.randomPhrase + " ");
//     console.log($scope.randomText);
//     console.log($scope.randomStyle);
//   };
}]);
