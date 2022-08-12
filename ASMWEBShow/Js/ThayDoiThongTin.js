
app.controller("thayDoiThongTinCtrl", function ($scope,$rootScope, $http, $routeParams) {
    $scope.hocSinhMoi=angular.copy($rootScope.accountAll);
    $scope.thayDoiThongTin = function() {
        var ck = true;
        for(let i of $rootScope.listHocSinh){
            if(i.usename==$scope.hocSinhMoi.usename){
                ck = false;
                if(document.getElementById("radio1").checked){
                    $scope.hocSinhMoi.gender=true;
                }else{
                    $scope.hocSinhMoi.gender=false;
                }
                i=$scope.hocSinhMoi;
                $rootScope.accountAll=i;
                $rootScope.thongbaoHienTai=$rootScope.thongbaolist[0].updateTrue;
                modalthongbaoshow();
                break;
            }
        }
        if (ck) {
            $rootScope.thongbaoHienTai=$rootScope.thongbaolist[0].updateFalse;
                modalthongbaoshow();
        }
    }
    $scope.hoanTac = function() {
    $scope.hocSinhMoi=angular.copy($rootScope.accountAll);
        
    }
    
});
  