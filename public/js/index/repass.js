/**
 * Created by admin on 2017/8/23.
 */
define(["jquery"], function ($) {
  $(function () {
    $(".btn_save").click(function () {
      $.ajax({
        type: "post",
        url: "/api/teacher/repass",
        data: $("form").serialize(),
        beforeSend: function () {
          var new_pass = $("#tc_new_pass").val();
          var conform_pass = $("#conform").val();
          
          if (new_pass != conform_pass) {
            alert("您的密码不一致");
            return false;
          }
          
        },
        success: function (info) {
          alert("修改成功");
          $("#logout").click();
        }
      })
    })
    
    
  });
});