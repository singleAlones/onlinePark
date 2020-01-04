// pages/find/find.js
const app = getApp();
var http = require("../../http.js"); 
import Toast from '/vant-weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img:'',
    hname:'',
    hphone:'',
    baseUrl:'',
    pages:'',
    bg:"" 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      baseUrl: app.globalData.baseUrl  
    })
 
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
  userNameInput: function (e) {
    this.setData({
     hname: e.detail.value
    })
  },
  userPhoneInput: function (e) {
    this.setData({
      hphone: e.detail.value
    })
  },
   reg:function(){
      var hname=this.data.hname;
      var hphone=this.data.hphone;
      var that = this;
     http.getData('users/user?hname=' + hname + "&&hphone=" + hphone, this.shuffleSuc, this.fail);    
   }, 
  shuffleSuc: function (res) {
    var self = this;
    
    if (res.code == 400) {
      Toast(res.msg);
    } else if (res.code == 305) {
      Toast(res.msg);
    } else if (res.code == 301) {
      Toast.fail(res.msg);
    }else if(res.code==300){
      Toast(res.msg);
    } else if (res.code == 200) {
      Toast.success(res.msg);
      setTimeout(function () {
        wx.navigateTo({ url: '../find/find' })
      }, 2000)
    }
  },
  fail: function () {
    console.log("失败")
  },
})