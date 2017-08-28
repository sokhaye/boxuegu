/**
 * Created by admin on 2017/8/24.
 */
define(["jquery","template"],function ($,template) {
  
  
     $.ajax({
       type:"get",
       url:"/api/category",
       dataType:"json",
       success:function (info) {
         var html=template("category_list_tmp",info);
         console.log(info);
         $("#category_list_t").html(html);
       }
     })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
});