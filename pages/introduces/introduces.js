// pages/introduce/introduce.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseUrl: '',
    img: '',
    introduce: '',
    introduces:'',
    advantage:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({ title: '园区介绍' });
    this.setData({
      baseUrl: app.globalData.baseUrl
    })
    var self = this;
    // 大图背景
     
    wx.request({
      url: this.data.baseUrl + 'indexs/big_img', //news img
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        // console.log(res.data);
        self.setData({
          img: res.data[4].biimg
        })
      }
    })
    //introduce
    wx.request({
      url: this.data.baseUrl + 'indexs/introduce', //news img
      header: {
        'content-type': 'application/json'
      },
      success(res) {
    //    console.log(res.data);
        
        self.setData({
          introduce: res.data
        })
     
    //   console.log(self.data.introduces)
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
  jump:function(e){
    var incid = e.currentTarget.dataset.id;
   // console.log(incid)
    
    if(incid==3){
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 500
      })
      wx.navigateTo({ url: '../advantage/advantage' })
    }else{
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 500
      })
      wx.navigateTo({ url: '../introduce/introduce?incid=' + incid })
    }
  },
  jumps:function(){
     
  
    
  }
})