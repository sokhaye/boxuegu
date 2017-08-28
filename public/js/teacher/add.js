/**
 * Created by admin on 2017/8/22.
 */
define(["jquery", "template", "tool","datepicker","datepicker_cn"], function ($, template, tool) {
  $(function () {
    var tc_id = tool.getparam("tc_id");
    if (tc_id) {
      $.ajax({
        type: "get",
        url: "/api/teacher/edit",
        data: {
          tc_id: tc_id
        },
        success: function (info) {
          if (info.code == 200) {
            var data = info.result;
            data.title = "讲师编辑",
              data.btnText = "保 存",
              data.type = "edit"
            var html = template("teacher_addoredit", data);
            $(".teacher").html(html);
            tool.setDate("#join_date");
          }
        }
      })
      
    } else {
      var html = template("teacher_addoredit", {
        title: "讲师添加",
        btnText: "添加",
        type: "add"
      });
      $(".teacher").html(html);
      tool.setDate("#join_date");
      
    }
    
    
    $("body").on("click", ".btn_save", function () {
      var url = "";
      if (tc_id) {
        url = "/api/teacher/update"
      } else {
        url = "/api/teacher/add"
      }
      
      $.ajax({
        type: "post",
        url: url,
        data: $("form").serialize(),
        success: function (info) {
          if (info.code == 200) {
            location.href = "/teacher/list";
            
          }
        }
      })
    });
   
    
    
    
  })
})