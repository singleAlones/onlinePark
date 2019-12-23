// pages/industry/industry.js
import Dialog from '/vant-weapp/dialog/dialog';
const app = getApp();
var http = require("../../http.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    phone:'15353837992',
    baseUrl: '',
    inc:'',
    industry:'',
    appcid:'',
    industry_content:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      baseUrl: app.globalData.baseUrl,
      appcid: options.appcid
    })
    console.log(this.data.appcid)
    http.getData('indexs/application_content?appcid=' + options.appcid, this.shuffleSuc, this.fail);//company
    if (options.appcid == 3 || options.appcid == 5 || options.appcid == 6){
      http.getData('indexs/industry?appcid=' + options.appcid, this.succ, this.fail);
    }
    http.getData('indexs/industry_content?appcid=' + options.appcid, this.success, this.fail);
  },
    shuffleSuc: function (res) {
      var self = this;
      self.setData({
        inc: res[0] 
      })
    },
    succ:function(res){
      var self = this;
      self.setData({
        industry: res[0]
      })
    },
    success: function (res) {
        var self = this;
        self.setData({
          industry_content: res[0]
        })
      },
    fail: function () {
      console.log("失败")
    },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  clicks(){
    var that=this;
    Dialog.alert({
      title: '咨询电话',
      message: that.data.phone
    }).then(() => {
      // on close
    });

  } 

  
  
})