$(function () {
 $("#background").hide();
 

setTimeout(function () { //ファースト
    $("#first").fadeOut(2000);
  }, 700)
setTimeout(function () { //メイン背景
    $("#background").fadeIn(3600);
    $('#background').css({
      'height': "100%",
    });
  }, 650)
});