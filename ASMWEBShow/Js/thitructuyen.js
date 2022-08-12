
var checkngonngu="vi";
function closeMenu() {
    document.getElementById("menu").style.display = "none";
  }
  function openn() {
    document.getElementById("chatboxxx").style.display = "block";
  }
  function closee() {
    document.getElementById("chatboxxx").style.display = "none";
  }

  function guichat(massage) {
    if (massage != "") {
      var current = new Date();
      var time = current.getHours() + ":" + current.getMinutes();
      if(checkngonngu=="vi"){
        document.getElementById("chat-customer").innerHTML = document.getElementById("chat-customer").innerHTML +
        "<div class='d-flex justify-content-start'> <span>" + massage + "</span></div><span style='float: left;font-size: 12px;''><i class='bi bi-check2'></i> Đã gửi lúc " + time + "</span><hr>"
      }else{
        document.getElementById("chat-customer").innerHTML = document.getElementById("chat-customer").innerHTML +
        "<div class='d-flex justify-content-start'> <span>" + massage + "</span></div><span style='float: left;font-size: 12px;''><i class='bi bi-check2'></i> Sent at " + time + "</span><hr>"
      }
      
      document.getElementById('nutGui').scrollIntoView();
    }

  }
  function laytext() {
    var x = document.getElementById("chatbox_text").value;
    document.getElementById("chatbox_text").value = "";
    return x;
  }
  var x = 0;


// Dong ho
var h = 1; // Giờ
var m = 0; // Phút
var s = 0; // Giây
var timeout = null; // Timeout


function startClock() {

  if (s === -1) {
    m -= 1;
    s = 59;
  }
  if (m === -1) {
    h -= 1;
    m = 59;
  }
  if (h == -1) {
    checkClockStart=0;
    h=1;
    m=0;
    s=0;
    clearTimeout(timeout);
    alert('Hết giờ');
    var diem= document.getElementById("diem").innerHTML;
    var tongDiem= document.getElementById("tongDiem").innerHTML;
    alert("Tổng điểm : "+diem +'/'+tongDiem);
    document.location='layout.html#!/danhmuc';
  }
  if(h<10){
  document.getElementById('h').innerText = "0"+h.toString();
  }else{

    document.getElementById('h').innerText = h.toString();
  }
  if(m<10){
  document.getElementById('m').innerText = "0"+m.toString();
  }else{

    document.getElementById('m').innerText = m.toString();
  }
  if(s<10){
  document.getElementById('s').innerText = "0"+s.toString();
  }else{

    document.getElementById('s').innerText = s.toString();
  }
  
  timeout = setTimeout(function () {
    s--;
    startClock();
  }, 1000);
}

function clickDangKy(){
  document.getElementById("dangky_a").click();
}
function clickDangNhap(){
  document.getElementById("dangnhap_a").click();
}

function modalthongbaoshow(){
  document.getElementById("nham").style.display="block";
  document.getElementById("modalThongbao").style.animation="showThongBao 1s normal";
  setTimeout( animationThongbao,2000);
  setTimeout(hidetb ,3000);
  ;

}
function animationThongbao(){
  document.getElementById("modalThongbao").style.animation="hideThongBao 1s normal running"
}function hidetb(){
  document.getElementById("nham").style.display="none"
}