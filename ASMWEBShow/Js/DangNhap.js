
app.controller("danhNhapModal", function ($scope, $http, $rootScope) {
  $scope.userName = localStorage.getItem("userLocal");
  $scope.passWord = localStorage.getItem("passLocal");
  let kiemTraUser = false;
  $scope.dangNhap = function () {
    for (let i = 0; i < $rootScope.listHocSinh.length; i++) {
      if (
        $scope.userName == $rootScope.listHocSinh[i].username &&
        $scope.passWord == $rootScope.listHocSinh[i].password
      ) {
        kiemTraUser = true;
        $rootScope.checkdn=true;
        $rootScope.accountAll = angular.copy($rootScope.listHocSinh[i]);
        localStorage.clear();
        localStorage.setItem("userLocal", $rootScope.accountAll.username);
        localStorage.setItem("passLocal", $rootScope.accountAll.password);
        setTimeout(document.location = "/layout.html#!/lienhe",500);

          if($rootScope.linkVuaTruyCap==null){
            document.location = "/layout.html#!/trangchu";
          }else{
            document.location = $rootScope.linkVuaTruyCap;
          }
          
    
      $rootScope.thongbaoHienTai=$rootScope.thongbaolist[0].dangNhapTrue;
      modalthongbaoshow();

      }
    }
    if(!kiemTraUser){
      $rootScope.thongbaoHienTai=$rootScope.thongbaolist[0].dangNhapFalse;
      modalthongbaoshow();
    }
  };
});
