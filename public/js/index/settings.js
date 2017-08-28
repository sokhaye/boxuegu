/**
 * Created by admin on 2017/8/23.
 */
define(["jquery", "template", "tool", "ckeditor", "jquery_cookie", "datepicker", "datepicker_cn", "uploadify", "region"], function ($, template, tool, CKEDITOR) {
  
  $(function () {
    $.ajax({
      type: "get",
      url: "/api/teacher/profile",
      success: function (info) {
        if (info.code == 200) {
          var html = template("settings_tmp", info.result);
          $(".teacher-profile").html(html);
          
          
          // 日期插件
          tool.setDate("#set_birthday");
          tool.setDate("#set_joinday");
          
          //头像插件
          
          $("#upfile").uploadify({
            height: 120,
            swf: '/public/assets/uploadify/uploadify.swf',
            uploader: '/api/uploader/avatar',
            fileObjName: "tc_avatar",
            buttonText: "",
            width: 120,
            fileSizeLimit: "2MB",
            fileTypeExts: '*.gif; *.jpg; *.png',
            onUploadSuccess: function (f, data) {
              
              data = JSON.parse(data);
              var path = data.result.path;
              $(".preview img").attr("src", path);
              $("#touxiang img").attr("src", path);
              
              // 修改cookie
              var userinfo = $.cookie("userinfo");
              userinfo = JSON.parse(userinfo);
              console.log(path);
              console.log(userinfo);
              userinfo.tc_avatar = path;
            }
          });
          
          //三级联动
          $("#region").region({
            url: "/public/assets/jquery-region/region.json"
          })
          
          
          //富文本域
          
          CKEDITOR.replace("tc_introduce", {
            toolbarGroups: [
              {name: 'clipboard', groups: ['clipboard', 'undo']},
              
              {name: 'basicstyles', groups: ['basicstyles', 'cleanup']},
              '/',
              {name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi']},
              {name: 'styles'},
              {name: 'colors'},
            ]
          });
          
          
        }
        
      }
    })
    
    
    $(".teacher-profile").on("click", ".btn_ssss", function () {
  
      for ( instance in CKEDITOR.instances ) {
        CKEDITOR.instances[instance].updateElement();
      }
      
      $.ajax({
        type: "post",
        url: "/api/teacher/modify",
        data: $("form").serialize(),
        success: function (info) {
         if(info.code==200){
           location.href = "/";
         }
          
        }
        
      })
    })
    
    
  })
  
})