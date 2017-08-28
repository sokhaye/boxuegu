/**
 * Created by admin on 2017/8/24.
 */
define(["jquery", "template", "tool"], function ($, template, tool) {
  
  var cg_id = tool.getparam("cg_id");
  
  
  if (cg_id) {
    
    $.ajax({
      type: "get",
      url: "/api/category/edit",
      dataType: "json",
      data: {
        cg_id: cg_id
      },
      success: function (info) {
        if (info.code == 200) {
          // console.log(info);
          var data = info.result;
          // console.log(data);
          data.title = "修改课程";
          data.btn_ss = "保 存";
          var html = template("category_add_tmp", data);
          $("#category_course").html(html);
          // $("#cg_pid").val(data.cg_pid);
        }
      }
    })
    
    
  } else {
    $.ajax({
      type: "get",
      url: "/api/category/top",
      success: function (info) {
        if (info.code == 200) {
          
          var html = template("category_add_tmp", {
            title: "添加课程",
            btn_ss: "添 加",
            top: info.result
          });
          $("#category_course").html(html);
          
        }
      }
    })
    
    
  }
  
  
  $("body").on("click", ".btn_sss", function () {
    
    var url = "";
    if (cg_id) {
      url = "/api/category/modify";
    } else {
      url = "/api/category/add";
    }
    
    $.ajax({
      type: "post",
      url: url,
      data: $("form").serialize(),
      success: function (info) {
        location.href = "/category/list";
      }
    })
    
  })
  
  
});