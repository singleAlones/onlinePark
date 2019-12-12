// pages/home/home.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
     img:"",
     baseUrl:'',
     index:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      baseUrl: app.globalData.baseUrl
    })
   
    var self = this;
 
    wx.request({
      url: this.data.baseUrl+'indexs/i_carousel', //home carousel
      header: {
        'content-type': 'application/json'
      }, 
      success(res) { 
     //   console.log(res.data );
         
        self.setData({
          img: res.data
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
  
  onShareAppMessage() {
   
  },
  jump1() {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 500
    })
    wx.navigateTo({ url: '../introduces/introduces' })
  },
  jump2(){
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration:500
    })
    wx.navigateTo({ url:'../policys/policys'})
  },
  jump3() {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 500
    })
    wx.navigateTo({ url: '../garden/garden' })
  },
  jump4() {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 500
    })
    wx.navigateTo({ url: '../find/find' })
  },
    jump0() {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 500
    })
      wx.switchTab({ url: '../home/home' })
  },
    jumps() {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 500
    })
      wx.switchTab({ url: '../find/find' })
  },
   
  jump(e){
    console.log(e.currentTarget.dataset.id)
    var index=e.currentTarget.dataset.id;
    if(index==0){
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 500
      })
      wx.navigateTo({ url: '../find/find' })
    }else if(index==1){
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 500
      })
      wx.navigateTo({ url: '../policys/policys' })
    }else if(index==2){
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 500
      })
      wx.navigateTo({ url: '../introduces/introduces' })
    }else if(index==3){
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 500
      })
      wx.navigateTo({ url: '../garden/garden' })
    } else if (index ==4) {
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 500
      })
      wx.navigateTo({ url: '../merit/merit' })
    }
  }
})