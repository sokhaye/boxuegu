/**
 * Created by admin on 2017/8/21.
 */
require.config({
  baseUrl:"/public/",
  paths:{
    jquery:"assets/jquery/jquery",
    jquery_form:"assets/jquery-form/jquery.form",
    jquery_cookie:"assets/jquery-cookie/jquery.cookie",
    template:"assets/artTemplate/template-web",
    bootstrap:"assets/bootstrap/js/bootstrap",
    tool:"js/common/tool",
    datepicker:"assets/bootstrap-datepicker/js/bootstrap-datepicker",
    datepicker_cn:"assets/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min",
    nprogress:"assets/nprogress/nprogress",
    uploadify:"assets/uploadify/jquery.uploadify",
    region:"assets/jquery-region/jquery.region",
    ckeditor:"assets/ckeditor/ckeditor",
    echarts:"assets/echarts/echarts.min",
    jcrop:"assets/Jcrop/js/Jcrop"
  },
  shim:{
    bootstrap:{
      deps:["jquery"]
    },
    datepicker_cn:{
      deps:["jquery","datepicker"]
    },
    uploadify:{
      deps:["jquery"]
    },
    ckeditor:{
      exports:"CKEDITOR"
    },
    jcrop:{
      deps:["jquery"]
    }
  }
})