// pages/policy/policy.js
const app = getApp();
var http = require("../../http.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    policys: '',
    baseUrl: '',
    img:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      baseUrl: app.globalData.baseUrl
    })
    http.getData('indexs/policy_content?pocid=' + options.pocid, this.shuffleSuc, this.fail);//new_content  
    http.getData('indexs/big_img', this.succ, this.fail);//big_img
  },
  shuffleSuc: function (res) {
    var self = this;
    self.setData({
      policys: res 
    })
  },
  succ: function (res) {
    var self = this;
    console.log(res)
    self.setData({
      img: res[1].biimg
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

  }
})