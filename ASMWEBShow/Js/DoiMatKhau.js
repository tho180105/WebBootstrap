app.controller(
  "doiMatKhauCtrl",
  function ($scope, $rootScope, $http, $routeParams) {
    $scope.doiMatKhau = function () {
      var ck = true;
      $rootScope.listHocSinh.forEach((st) => {
        if (st.password == $scope.password) {
          if ($scope.newpassword == $scope.newPassComfirm) {
            st.password = angular.copy($scope.newpassword);
            $rootScope.thongbaoHienTai=$rootScope.thongbaolist[0].doiMKTrue;
            modalthongbaoshow();
            document.location = "/layout.html#!/trangchu";
            ck = false;
            return;
          }
        }
      });
      if (ck) {
        $rootScope.thongbaoHienTai=$rootScope.thongbaolist[0].doiMKFalse;
        modalthongbaoshow();
      }
    };
  }
);
