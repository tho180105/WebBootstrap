var app = angular.module("thitructuyen", ['ngRoute','ngAnimate']);
app.run(function ($rootScope, $http,$animate) {
  $animate.enabled(true);
  $http.get("/Data/Students.js").then(
    function (d) {
      $rootScope.listHocSinh = d.data;
      $rootScope.accountAll = null;
      let u=localStorage.getItem("userLocal");
      let p=localStorage.getItem("passLocal");
     for (let i = 0; i < $rootScope.listHocSinh.length; i++) {
       if (
         u == $rootScope.listHocSinh[i].username &&
         p == $rootScope.listHocSinh[i].password
       ) {
           $rootScope.accountAll = angular.copy($rootScope.listHocSinh[i]);
         localStorage.clear();
         localStorage.setItem("userLocal", $rootScope.accountAll.username);
         localStorage.setItem("passLocal", $rootScope.accountAll.password);
         setTimeout(document.location = "/layout.html#!/trangchu",500);
         document.location = "/layout.html#!/trangchu";
       }
     }
    },
    function (d) {
      alert("Lỗi");
    }
  ).
 then(
      function(){
        $rootScope.thongbaolist =thongbaolist;
      }
   
  );
  
});
app.config(function ($routeProvider,$animateProvider,$animateProvider) {
  $animateProvider.customFilter(function(node, event, options) {
    // Example: Only animate `enter` and `leave` operations.
    return event === 'enter' || event === 'leave';
  });
  // $animateProvider.classNameFilter(/repeated-item -/);
  $routeProvider
    .when("/gioithieu", { templateUrl: "/html/gioithieu.html" })
    .when("/lienhe", { templateUrl: "/html/lienhe.html" })
    .when("/gopy", { templateUrl: "/html/gopy.html" })
    .when("/dangky", {
      templateUrl: "/html/modalDangKy.html",
      controller: "danhKyModal",
    })
    .when("/dangnhap", {
      templateUrl: "/html/modalDangNhap.html",
      controller: "danhNhapModal",
    })
    .when("/quenmatkhau", {
      templateUrl: "/html/modalQuenMK.html",
      controller: "quenMatKhauCtrl",
    })
    .when("/danhmuc", { templateUrl: "/html/danhmuc.html" })
    .when("/doimatkhau", {
      templateUrl: "/html/modalDoiMK.html",
      controller: "doiMatKhauCtrl",
    })
    .when("/thaydoithongtin", {
      templateUrl: "/html/modalThayDoiThongTin.html",
      controller: "thayDoiThongTinCtrl",
    })
    // .when("/quenmatkhau", { templateUrl: "/html/modalQuenMK.html" })
    .when("/tracnghiem/:idMH/:tenMH", {
      templateUrl: "/html/tracnghiem.html",
      controller: "loadCauHoi",
    })
    .otherwise({ templateUrl: "/html/card_home.html" });
});




// Controller cho toàn bộ trang con ↓
app.controller("load", function ($scope, $rootScope, $http, $routeParams) {
  //Thong bao ↓    ↓   ↓   ↓   ↓    ↓   ↓   ↓   ↓    ↓   ↓   ↓   ↓    ↓   ↓   ↓   ↓    ↓   ↓   ↓   
  $rootScope.thongbaoHienTai={};
  //Thong bao ↑   ↑    ↑   ↑   ↑   ↑   ↑    ↑   ↑   ↑   ↑   ↑    ↑   ↑   ↑   ↑   ↑    ↑   ↑   ↑   
  //Nav ↓
  
  $scope.linktruycap=function(){
    $rootScope.linkVuaTruyCap=document.location.toString();
  }
 
 //Ngon ngu ↓    ↓   ↓   ↓   ↓    ↓   ↓   ↓   ↓    ↓   ↓   ↓   ↓    ↓   ↓   ↓   ↓    ↓   ↓   ↓    
 $rootScope.translation=[];
 $rootScope.translation=vi;
 var checkNgonNgu=0;
 $scope.changeVi = function () {
  checkngonngu="vi";
   document.getElementById("vi").style.backgroundColor="blue";
   document.getElementById("vi").style.color="white";
   document.getElementById("en").style.backgroundColor="white";
   document.getElementById("en").style.color="blue";
   $rootScope.translation=vi;
   console.log($rootScope.translation)
 };

 $rootScope.changeEn = function () {
  checkngonngu="en";
  document.getElementById("vi").style.backgroundColor="white";
  document.getElementById("vi").style.color="blue";
  document.getElementById("en").style.backgroundColor="blue";
  document.getElementById("en").style.color="white";
   $rootScope.translation=en;
   console.log($rootScope.translation)
 };


  $scope.dangXuat = function () {
    $rootScope.accountAll=null;
    localStorage.clear();
    $rootScope.thongbaoHienTai=$rootScope.thongbaolist[0].Logout;
      modalthongbaoshow();
  };
  // Nav ↑
  //Danh mục
  $scope.checkDangNhapDanhMuc=function(Id,Name){
    if($rootScope.accountAll==null){
      $rootScope.thongbaoHienTai.mainText="Vui lòng đăng nhập !";
      $rootScope.thongbaoHienTai.icon=false;

      modalthongbaoshow();
    }else{
      document.location.href="#!tracnghiem/"+Id+"/"+Name;
    }
  }
  //Get List Danh muc mon hoc ↓
  $scope.cacmonhoc = [];
  $http.get("/Data/Subjects.js").then(function (d) {
    $scope.cacmonhoc = d.data;
  });
  //Get List Danh muc mon hoc ↑

  //Tab danh mục bên trái ↓
  $scope.searchinput=""
  $scope.searchDanhMuc=function(){
   setTimeout(delaysearch,100);

  }
  function delaysearch(){
    var s=document.getElementById("searchinput").value;
   
      $scope.searchinput= s
  }
  //Tab danh mục bên trái ↑

  // Xử lý page ↓
  $scope.page = 0;
  $scope.oldPage = "0";
  $scope.loadPage = function () {
    setTimeout(doimau, 1);
  };
  function doimau() {
    document.getElementById(
      "page" + Number($scope.oldPage / 6 + 1)
    ).style.backgroundColor = "rgb(13,110,253)";
    document.getElementById(
      "page" + Number($scope.oldPage / 6 + 1)
    ).style.color = "white";
  }
  $scope.particularPage = function (pageInput) {
    $scope.page = Number(pageInput) * 6 - 6;
    document.getElementById(
      "page" + Number($scope.oldPage / 6 + 1)
    ).style.backgroundColor = "white";
    document.getElementById(
      "page" + Number($scope.oldPage / 6 + 1)
    ).style.color = "rgb(36,110,253)";
    document.getElementById("page" + pageInput).style.backgroundColor =
      "rgb(13,110,253)";
    document.getElementById("page" + pageInput).style.color = "white";
    $scope.oldPage = $scope.page;
  };
  $scope.nextPageMonHoc = function () {
    if ($scope.page >= $scope.cacmonhoc.length - 6) {
    } else {
      $scope.page += 6;
    }
    document.getElementById(
      "page" + Number($scope.oldPage / 6 + 1)
    ).style.backgroundColor = "white";
    document.getElementById(
      "page" + Number($scope.oldPage / 6 + 1)
    ).style.color = "rgb(36,110,253)";
    document.getElementById(
      "page" + Number($scope.page / 6 + 1)
    ).style.backgroundColor = "rgb(13,110,253)";
    document.getElementById("page" + Number($scope.page / 6 + 1)).style.color =
      "white";
    $scope.oldPage = $scope.page;
  };
  $scope.previousPageMonHoc = function () {
    if ($scope.page == 0) {
    } else {
      $scope.page -= 6;
    }
    document.getElementById(
      "page" + Number($scope.oldPage / 6 + 1)
    ).style.backgroundColor = "white";
    document.getElementById(
      "page" + Number($scope.oldPage / 6 + 1)
    ).style.color = "rgb(36,110,253)";
    document.getElementById(
      "page" + Number($scope.page / 6 + 1)
    ).style.backgroundColor = "rgb(13,110,253)";
    document.getElementById("page" + Number($scope.page / 6 + 1)).style.color =
      "white";
    $scope.oldPage = $scope.page;
  };
  // Xử lý page ↑

  //Hàm vòng lặp ↓
  $scope.range = function (min, max, step) {
    step = step || 1;
    var input = [];
    for (var i = min; i <= max; i += step) {
      input.push(i);
    }
    return input;
  };
  //Hàm vòng lặp ↑
}
);
// Controller cho toàn bộ trang con ↑

// Xu li dong ho ↓

// Xu li dong ho ↑
