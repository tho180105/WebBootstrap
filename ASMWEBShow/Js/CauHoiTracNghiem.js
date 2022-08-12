//Controller xử lí trang trắc nghiệm ↓
app.controller("loadCauHoi", function ($scope, $http, $routeParams) {
  // Xử lí link vào phần trắc nghiệm ↓
  $scope.caccauhoi = [];
  $scope.idMH = $routeParams.idMH;
  $scope.tenMH = $routeParams.tenMH;
  $http
    .get("/Data/Quizs/" + $scope.idMH + ".js")
    .then(
      function (d) {
        $scope.caccauhoi = d.data;
      },
      function (d) {
        alert("Lỗi");
      }
    )
    .then(function () {
      $scope.cacCauHoiRanDom = $scope.random_item(
        angular.copy($scope.caccauhoi)
      );
    })
    .then(function () {
      $scope.newCacCauHoi = [];
      for (let x = 0; x < $scope.cacCauHoiRanDom.length; x++) {
        let cauhoi = angular.copy($scope.cacCauHoiRanDom[x]);
        cauhoi.Answers = $scope.random_item($scope.cacCauHoiRanDom[x].Answers);
        $scope.newCacCauHoi.push(cauhoi);
      }
      // console.log(...$scope.newCacCauHoi);
    });

  // Xử lí link vào phần trắc nghiệm ↑
  // Xử lí trang trắc nghiệm ↓
  $scope.cauHienTai = 0;
  $scope.hienThiCauHoi = function (cauHoiSo) {
    $scope.cauHienTai = cauHoiSo;
  };
  $scope.hienPageCauHoi = function (cauHoiSo) {
    if (
      $scope.cauHienTai == 0 ||
      $scope.cauHienTai == 1 ||
      $scope.cauHienTai == 2
    ) {
      if (cauHoiSo < 5) {
        return true;
      }
    } else if (
      $scope.cauHienTai == $scope.caccauhoi.length - 1 ||
      $scope.cauHienTai == $scope.caccauhoi.length - 2 ||
      $scope.cauHienTai == $scope.caccauhoi.length - 3
    ) {
      if (cauHoiSo > $scope.caccauhoi.length - 6) {
        return true;
      }
    } else {
      if (
        cauHoiSo > $scope.cauHienTai - 3 &&
        cauHoiSo < $scope.cauHienTai + 3
      ) {
        return true;
      }
    }
  };
  // Xử lí trang trắc nghiệm ↑
  $scope.diemHienTai = 0;
  // Btn Trả lời ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  $scope.cacCauDaTraLoi = [];
  $scope.chamDiem = function (cauHoiSo, idCauHoi, diem) {
    var dapAn = 0;
    for (var i = 0; i < $scope.caccauhoi.length; i++) {
      if (idCauHoi == $scope.caccauhoi[i].Id) {
        dapAn = $scope.caccauhoi[i].AnswerId;
      }
    }
    var dapAnDuocChon = 0;
    var cacCauTraLoi = document.getElementsByClassName(idCauHoi);
    for (var i = 0; i < cacCauTraLoi.length; i++) {
      if (cacCauTraLoi[i].checked == true) {
        dapAnDuocChon = cacCauTraLoi[i].value;
      }
    }
    if (dapAnDuocChon == 0) {
      alert("Vui lòng chọn đáp án !");
    } else {
      $scope.cauHoiSoMang.push(angular.copy($scope.cauHienTai));

      if (dapAn == dapAnDuocChon) {
        // alert("Đúng !");
        chuyendong();
        $scope.cauHoiSoDungSaiMang.push(1);
        $scope.diemHienTai += diem;
      } else {
        $scope.cauHoiSoDungSaiMang.push(2);
        chuyendong();

        // alert("Sai !");
      }
      $scope.cacCauDaTraLoi.push(idCauHoi, dapAnDuocChon);
    }
  };
  // Kiểm tra câu đã trả lời hay chưa ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  $scope.kiemTraNut = function (cauHoiSo) {
    for (var i = 0; i < $scope.cacCauDaTraLoi.length; i++) {
      if (cauHoiSo == $scope.cacCauDaTraLoi[i]) {
        return true;
      }
    }
    return false;
  };
  // Kiểm tra câu đã trả lời hay chưa ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
  // Btn Trả lời ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

  // Btn nộp bài ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  $scope.nopBai = function () {
    var traLoi = confirm("Bạn thật sự muốn kết thúc bài thi ?");
    if (traLoi == 1) {
      alert(
        "Tổng điểm : " + $scope.diemHienTai + "/" + $scope.caccauhoi.length
      );
      h = 1;
      m = 0;
      s = 0;
      document.location = "layout.html#!/danhmuc";
    }
  };
  // Btn nộp bài ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
  // Test
  $scope.dap = [
    {
      cau: "",
      dapan: "",
    },
  ];
  $scope.dd = {};
  $scope.test = function (cauHoi, dapan) {
    $scope.dd = angular.copy($scope.dap[0]);
    $scope.dd.cau = cauHoi;
    $scope.dd.dapan = dapan;
    var flag = true;
    try {
      for (var i = 0; i < $scope.dap.length; i++) {
        if (cauHoi == $scope.dap[i].cau) {
          flag = false;
          $scope.dap[i].dapan = dapan;
          break;
        }
      }
    } catch (error) {}
    if (flag) {
      $scope.dap.push(angular.copy($scope.dd));
    }
  };
  $scope.check = function (cauHoiSo, idDapAn) {
    for (var i = 0; i < $scope.dap.length; i++) {
      if (cauHoiSo == $scope.dap[i].cau) {
        if (idDapAn == $scope.dap[i].dapan) {
          return true;
        }
      }
    }
    return false;
  };
  // Random Đáp án
  $scope.random_item = function (array) {
    var soPhanTu = array.length;
    let arr = [];
    let newArr = [];
    do {
      var soNgauNhien = Math.floor(Math.random() * soPhanTu);
      if (arr.length > 0) {
        let check = true;
        for (let j = 0; j < arr.length; j++) {
          if (soNgauNhien == arr[j]) {
            check = false;
          }
          if (j + 1 == arr.length && arr[j] != soNgauNhien && check) {
            arr.push(soNgauNhien);
          }
        }
      } else {
        arr.push(soNgauNhien);
      }
    } while (arr.length < soPhanTu);

    for (let i = 0; i < soPhanTu; i++) {
      newArr.push(array[arr[i]]);
    }
    return newArr;
  };

  $scope.cauHoiSoMang = [];
  $scope.cauHoiSoDungSaiMang = [];
  $scope.checkAnswerPage = function (index) {
    for (let i = 0; i < $scope.cauHoiSoMang.length; i++) {
      if (index == $scope.cauHoiSoMang[i]) {
        return $scope.cauHoiSoDungSaiMang[i];
      }
    }
    return 3;
  };
  // Random đáp án
});
//Controller xử lí trang trắc nghiệm ↑
var i = 0;
function chuyendong() {
  if (i == 0) {
    document.getElementById("dalam").style.animation = "btn-out 1s normal";
    i++;
  } else {
    document.getElementById("dalam").style.animation = "btn-in 1s normal";
    i = 0;
  }
}
