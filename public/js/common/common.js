define(["jquery", "template", "nprogress", "jquery_cookie",], function ($, template, np) {
  
  $(function () {
    
    np.start();
    
    setTimeout(function () {
      np.done();
    }, 500);
  
    $(document).ajaxStart(function () {
      $(".mask").show();
    });

    $(document).ajaxStop(function () {
      setTimeout(function () {
        $(".mask").hide();
      }, 400);
    });
    //设置头像
    if (location.pathname !== "/login") {
      //如果有PHPSESSID就加载头像，没有的话就退回login
      if ($.cookie("PHPSESSID")) {
        var userinfo = $.cookie("userinfo");
        userinfo = JSON.parse(userinfo);
        //渲染
        var html = template("tx", userinfo);
        $("#touxiang").html(html);
      } else {
        location.href = "/login";
      }
      
      
      //退出功能
      $("#logout").click(function () {
        
        //发送ajax请求，告诉服务器，我要退出登录
        $.ajax({
          type: "post",
          url: "/api/logout",
          success: function (info) {
            if (info.code == 200) {
              
              //删除userinfo这个cookie
              $.removeCookie("userinfo", {path: "/"});
              //跳转到login页面
              location.href = "/login";
              
            }
          }
        });
        
        
      });
      
      
      //高亮
      
      var pathname = location.pathname;
      if (pathname == "/teacher/add") {
        pathname = "/teacher/list"
      };
      if (pathname == "/category/add") {
        pathname = "/category/list"
      };
      if (pathname == "/index/settings") {
        pathname = "/"
      };
      
      var $links = $(".navs a");
      $links.each(function () {
        var $that = $(this);
        $that.removeClass("active");
        if ($that.attr("href") == pathname) {
          $that.addClass("active");
        }
        ;
        
      });
      
      
      //二级菜单
      $(".managerClass").click(function () {
        $(".managerClass ul").slideToggle();
      });
      
      $(".managerClass").find(".active").parent().parent().show();
    }
    
    
  })
  
});