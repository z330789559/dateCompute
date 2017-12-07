/**
 * Created by baozhong on 2017/12/7.
 */
!function (root,factory) {
      if(typeof module ==="object" && module.exports){
          module.exports=factory();
      }else{
          root.dateCompute=factory();
      }
}( typeof window!=="undefined"?window:this,function(){
    var  dateCompute={
         name:"日期工具",
        showDate:function(date){
            var _date=date;
            if(typeof _date=="string"){
                _date=new Date(_date);
            }
            if(typeof _date !="object"){
               console.log("日期不符合输入");
            }
           return _date.getDay();
        }
    };
    return dateCompute;
});