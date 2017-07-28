








var config = {
    apiKey: "AIzaSyAjndtUcPLgCpZzYjlTU--ILXYDS9R539c",
    authDomain: "adsf-d7781.firebaseapp.com",
    databaseURL: "https://adsf-d7781.firebaseio.com",
    projectId: "adsf-d7781",
    storageBucket: "",
    messagingSenderId: "798755064622"
  };
  firebase.initializeApp(config);


  var app=angular.module("app", ["firebase"]);

  app.factory("kommentarer", function($firebaseArray) {
      var ref=firebase.database().ref().child("kommentarer");
      return $firebaseArray(ref);
  });

  app.controller("KommentarControl", function($scope, kommentarer) {
  	$scope.kommentarer = kommentarer;


    // Definera en kommentar med tom text och skribent
    $scope.kommentar = {
        text: "",
        skribent: ""
     };


      $scope.addComment = function()  {
      	$scope.kommentarer.$add($scope.kommentar);
      	$scope.kommentar = {
        text: "",
        skribent: ""
     };

      }

  });