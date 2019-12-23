// pages/news/news.js
const app = getApp();
var http = require("../../http.js");
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    img:'', 
    news:'',
    baseUrl:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({ title: '领导关怀' }) ;
    this.setData({
      baseUrl: app.globalData.baseUrl
    });
    http.getData('indexs/news_img', this.shuffleSuc, this.fail);//news img
    http.getData('indexs/news', this.succ, this.fail);
  },
  shuffleSuc: function (res) {
    var self = this;
    self.setData({
      img: res
    })
  },
  succ: function (res) {
    var self = this;
    self.setData({
      news: res
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
  jump(e){
    var ncid=e.currentTarget.dataset.id;
    console.log(ncid)
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 500
    })
    wx.navigateTo({ url: '../new/new?ncid='+ncid})
  }
 


})
 