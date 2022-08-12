
  app.controller("tienich", function ($scope, $http, $rootScope) {
    $scope.numberRamdom= function () {
        return Math.ceil(Math.random() * 200) + 100;
      };
      $scope.colorRamdom = function () {
        var arrColor = new Array(
          "00aefd",
          "ffa400",
          "07a787",
          "ff7870",
          "39C0ED",
          "e74c3c"
        );
        var soMau = Math.ceil(Math.random() * 100) % 6;
        return arrColor[soMau];
      };
  });