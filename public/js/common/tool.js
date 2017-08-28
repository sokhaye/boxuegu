/**
 * Created by admin on 2017/8/22.
 */
define([],function () {
  
    function getparamObj() {
      var paramStr=location.search;
      paramStr=paramStr.slice(1);
      // console.log(paramStr);
      var paramArr=paramStr.split("&");
      var paramObj={}
      for(var i=0;i<paramArr.length;i++){
        var key=paramArr[i].split("=")[0];
        var vaule=paramArr[i].split("=")[1];
        paramObj[key]=vaule;
        
      }
      return paramObj;
    }
    function getparam(key) {
      return getparamObj()[key];
    }
    function setDate(ele) {
    $(ele).datepicker({
      format:"yyyy-mm-dd",
      endDate:"+0d",
      autoclose:true,
      language:"zh-CN",
      todayBtn:"linked",
      todatHighlight:true
    })
  }
    return{
      getparamObj:getparamObj,
      getparam   :getparam,
      setDate    :setDate
    }
  
})