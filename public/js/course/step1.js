/**
 * Created by admin on 2017/8/25.
 */
define(["jquery", "template", "tool", "ckeditor"], function ($, template, tool, CKEDITOR) {
  
  $(function () {
    var cs_id = tool.getparam("cs_id");
    
    $.ajax({
      type: "get",
      url: "/api/course/basic",
      data: {
        cs_id: cs_id
      },
      success: function (info) {
        console.log(info);
        var html = template("step1_tmp", info.result);
        $(".course-add").html(html);
        
        CKEDITOR.replace("step1_area");
        
      }
    })
    
    
    $("body").on("change", "#cs_cg_pid", function () {
      
      var cg_id = $("#cs_cg_pid").val();
      $.ajax({
        type: "get",
        url: "/api/category/child",
        data: {
          cg_id: cg_id
        },
        success: function (info) {
          var html = template("selected_tmp", info);
          $("#cs_cg_id").html(html);
        }
      })
    })
  });
  
  $("body").on("click", ".btn_save", function () {
    
    for (instance in CKEDITOR.instances) {
      CKEDITOR.instances[instance].updateElement();
    }
    
    
    $.ajax({
      type: "post",
      url: "/api/course/update/basic",
      data: $("form").serialize(),
      success: function (info) {
        if (info.code == 200) {
          location.href = "/course/step2?cs_id="+info.result.cs_id;
        }
      }
    })
  })
});