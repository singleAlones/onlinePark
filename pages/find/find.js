// pages/find/find.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img:'',
    uname:'',
    uphone:'',
    baseUrl:'',
    pages:'',
    bg:"" 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      baseUrl: app.globalData.baseUrl ,
      
    })
     


   /* var self = this;
    wx.request({
      url: 'http://127.0.0.1:3000/indexs/order_img', //news img
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        console.log(res.data);

        self.setData({
          img: res.data
        })
      }
    })*/
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
     uname: e.detail.value
    })
  },
  userPhoneInput: function (e) {
    this.setData({
      uphone: e.detail.value
    })
  },
   reg:function(){
      var uname=this.data.uname;
      var uphone=this.data.uphone;
      console.log(uname,uphone)
   } 
})