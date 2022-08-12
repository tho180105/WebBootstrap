app.controller('quenMatKhauCtrl', function($rootScope, $scope) {
    $scope.getPass = function() {
        var ck = true;
        $rootScope.listHocSinh.forEach(st => {
            if (st.email == $scope.email && st.username == $scope.username) {
                 $rootScope.thongbaoHienTai=$rootScope.thongbaolist[0].qTrue;
                 $rootScope.thongbaoHienTai.mainText=("Mật khẩu của bạn là : " +st.password);
                 modalthongbaoshow();
                 document.location="/layout.html#!/dangnhap"
                ck = false;
                return;
            }
        });
        if (ck) {
            $rootScope.thongbaoHienTai=$rootScope.thongbaolist[0].qFalse;
            modalthongbaoshow();
        }
    }

});