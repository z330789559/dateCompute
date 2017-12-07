/**
 * Created by baozhong on 2017/12/7.
 */
var test=require("tape")
var dateCompute=require("../src/index")

test("开始每周第几天计算",function(t){
    t.equal(dateCompute.showDate(new Date()),5)
    t.equal(dateCompute.showDate(new Date()),4)
    t.equal(dateCompute.name,"日期工具");
    t.end()
})