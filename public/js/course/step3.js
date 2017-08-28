/**
 * Created by admin on 2017/8/25.
 */
define(["jquery", "template", "tool", "bootstrap","jquery_form"], function ($, template, tool) {
  
  var cs_id = tool.getparam("cs_id");
  $.ajax({
    type: "get",
    url: "/api/course/lesson",
    data: {
      cs_id: cs_id
    },
    success: function (info) {
      // console.log(info);
      var html = template("step3_tmp", info.result);
      $(".course-add").html(html);
    }
  });
  
  
  $("body").on("click", ".btn_add", function () {
    var html = template("modal_tmp", {
      title: "添加课时",
      btnText: "添 加",
      type:"add",
      ct_cs_id:cs_id
    });
    
    $("#lesson").data("type", "add");
    $("#lesson").html(html);
    
    
    $("#lesson").modal("show");
  });
  
  
  $("body").on("click", ".btn_edit", function () {
    
    var ct_id = $(this).parent().data("id");
    $.ajax({
      type: "get",
      url: "/api/course/chapter/edit",
      data: {
        ct_id: ct_id
      },
      success: function (info) {
        var data = info.result
        data.title = "修改课时",
          data.btnText = "修 改"
        var html = template("modal_tmp", data);
        
        $("#lesson").data("type", "edit");
        $("#lesson").html(html);
        
        
        $("#lesson").modal("show");
      }
    })
    
    
  });
  
  
  $("body").on("click", ".btn_save", function () {
    
    var type = $("#lesson").data("type");
    var url = "";
    if (type == "add") {
      url = "/api/course/chapter/add"
    } else {
      url = "/api/course/chapter/modify"
    }
    
    var ct_is_free;
    if($("#ct_is_free").prop("checked")){
      ct_is_free=0
    }else {
      ct_is_free=1
    }
    
    $("form").ajaxSubmit({
      type: "post",
      url: url,
      data: {
        ct_is_free:ct_is_free
      },
      success: function (info) {
        if (info.code == 200) {
          location.reload();
        }
      }
    })
    
  })
});