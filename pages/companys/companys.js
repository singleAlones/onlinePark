// pages/company/company.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    companys: '',
    baseUrl: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({ title: '企业介绍' });
    this.setData({
      baseUrl: app.globalData.baseUrl
    })
    var self = this;
    wx.request({
      url: this.data.baseUrl + 'indexs/company', //company
      header: {
        'content-type': 'application/json'
      },
      success(res) {
  console.log(res.data);
        self.setData({
          companys: res.data
        })
      }
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
  jump(e) {
    var comcid = e.currentTarget.dataset.id;

    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 500
    })
    wx.navigateTo({ url: '../company/company?comcid=' + comcid })
  }
})