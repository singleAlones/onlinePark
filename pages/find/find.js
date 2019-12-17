// pages/find/find.js
const app = getApp();
 
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
      wx.request({
        url: this.data.baseUrl + 'users/user?hname='+hname+"&&hphone="+hphone,
        header: {
          'content-type': 'application/json'
        }, 
        success(res) { 
            
             if(res.data.code==400){
               Toast(res.data.msg);
             }else if(res.data.code==305){
               Toast(res.data.msg);
             } else if (res.data.code == 301) {
               Toast.fail(res.data.msg);
             } else if (res.data.code==200){
               Toast.success(res.data.msg);
              
               setTimeout(function () {
                
                 wx.navigateTo({ url: '../find/find' })
                 
               }, 2000)
              

              
              }
        
            
        }
      })
      
   } 
   
})