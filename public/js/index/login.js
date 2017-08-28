/**
 * Created by admin on 2017/8/21.
 */
define(["jquery", "jquery_cookie"], function ($) {
  $(function () {
    $("#btn_login").click(function () {
      $.ajax({
        type: "post",
        url: "/api/login",
        data: $("form").serialize(),
        dataType: "json",
        success: function (info) {
          console.log(info);
          if (info.code == 200) {
            
            var userinfo = JSON.stringify(info.result);
            
            $.cookie("userinfo", userinfo, {path: "/", expires: 1})
            location.href = "/"
          }
        }
        
      });
      return false;
    })
    
  })
})