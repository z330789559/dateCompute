/**
 * Created by baozhong on 2017/12/7.
 */
var test=require("tape")
var dateCompute=require("..")

test("开始每周第几天计算",function(t){
    t.equal(dateCompute(Date.now(),5))
    t.equal(dateCompute(Date.now(),4))
    t.end()
})