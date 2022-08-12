
app.controller("danhKyModal", function ($scope, $rootScope,$http, $routeParams) {
    $scope.dangKy=function(){
        var kiemtra=true;
        //Kiểm tra username + password
        for(let i of $rootScope.listHocSinh){
            if($scope.hocSinh.username==i.username ){
                $rootScope.thongbaolist[0].DKFalse.mainText="Username đã tồn tại !";
                $rootScope.thongbaoHienTai=$rootScope.thongbaolist[0].DKFalse;
                modalthongbaoshow();
                // alert("Username đã tồn tại !");
                var kiemtra=false;
            }
            if( $scope.hocSinh.email==i.email ){
                $rootScope.thongbaolist[0].DKFalse.mainText="Email đã được đăng ký !";
                $rootScope.thongbaoHienTai=$rootScope.thongbaolist[0].DKFalse;
                modalthongbaoshow();
                var kiemtra=false;
            }
            
        }
        // Kiểm tra ngày sinh > 6 tuổi
        var date=$scope.hocSinh.birthday;
        var hienTai=new Date();
        if(date.getYear()>hienTai.getYear()-6){
            $rootScope.thongbaolist[0].DKFalse.mainText="Trang web chỉ dành cho người trên 6 tuổi !";
            $rootScope.thongbaoHienTai=$rootScope.thongbaolist[0].DKFalse;
            modalthongbaoshow();
            var kiemtra=false;
        }

        if(kiemtra){
            $rootScope.listHocSinh.push(angular.copy($scope.hocSinh));
            $scope.hocSinh = {};
            document.location='/layout.html#!/trangchu';
            $rootScope.thongbaoHienTai=$rootScope.thongbaolist[0].DKTrue;
            modalthongbaoshow();
        }else{
            // $rootScope.thongbaoHienTai=$rootScope.thongbaolist[0].DKFalse;
            // modalthongbaoshow();
        }
        
    }
});
  
