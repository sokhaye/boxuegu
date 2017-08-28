/**
 * Created by admin on 2017/8/26.
 */
define(["jquery","echarts"],function ($,echarts) {
  console.log(111);
  $(function () {
    $.ajax({
      type:"get",
      url:"/api/dashboard",
      success:function (info) {
        var myChart = echarts.init(document.getElementById('main'));
        myChart.setOption(info);
      }
    })
    
    
  })
});