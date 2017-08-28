/**
 * Created by admin on 2017/8/22.
 */
define(["jquery", "template", "bootstrap"], function ($, template) {
  // console.log("hehe");
  $(function () {
    $.ajax({
      type: "get",
      url: "/api/teacher",
      dataType: "json",
      success: function (info) {
        // console.log(info);
        var html = template("teacher_list", info);
        $("#teacherinfo").html(html)
      }
    })
  });
  
  //模态框 查看显示
  $("#teacherinfo").on("click", ".btn_view", function () {
    var tc_id = $(this).parent().data("id");
    
    $.ajax({
      type: "get",
      url: "/api/teacher/view",
      data: {
        tc_id: tc_id
      },
      success: function (info) {
        if (info.code == 200) {
          var html = template("teacher_info", info.result);
          $("#teacherModal").html(html);
        }
        
      }
    })
    
    $("#teacherModal").modal('show');
  });
  
  
  $("#teacherinfo").on("click", ".btn_handle", function () {
    var tc_id = $(this).parent().data("id");
    var tc_status = $(this).parent().data("status");
    var $that = $(this);
    $.ajax({
      type: "post",
      url: "/api/teacher/handle",
      data: {
        tc_id: tc_id,
        tc_status: tc_status
      },
      success: function (info) {
        
        if (info.code == 200) {
          if (info.result.tc_status == 1) {
            $that.text("启 用");
            $that.removeClass("btn-warning");
            $that.addClass("btn-success");
          } else {
            $that.text("注 销");
            $that.addClass("btn-warning");
            $that.removeClass("btn-success");
          }
          $that.parent().data("status", info.result.tc_status);
         
        }
      }
    })
  })
  
})