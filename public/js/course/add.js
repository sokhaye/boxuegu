/**
 * Created by admin on 2017/8/25.
 */
define(["jquery"], function ($) {
  $(function () {
    
    $(".btn_save").click(function () {
      
      $.ajax({
        type: "post",
        url: "/api/course/create",
        data: $("form").serialize(),
        success: function (info) {
          location.href = "/course/step1?cs_id=" + info.result.cs_id;
        }
      })
    });
    
  });
})