/**
 * Created by admin on 2017/8/25.
 */
define(["jquery","template"],function ($,template) {
  $(function () {
    
    $.ajax({
      type:"get",
      url:"/api/course",
      success:function (info) {
        console.log(info);
        if(info.code==200){
          
          var html=template("course_list",info);
          $(".course-list").html(html)
        }
      }
    })
    
  })
});