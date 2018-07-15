var flag = true;

Page({

  /**
   * 1、页面的初始数据
   * 2、这里申请的变量都可以在.wxml中使用
   */
  data: {
    color: "window"

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log("onLoad函数")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log("onReady函数")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log("onShow函数")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log("onHide函数")

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    console.log("onUnload函数")

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    console.log("onPullDownRefresh函数")

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log("onReachBottom函数")

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    console.log("onShareAppMessage函数")

  },

  /**
   * 点击事件
   */
  click: function() {
    console.log("点击了文字")
    if(flag){
      color = "window-red";
      flag = false;
    }else{
      color = "window";
      flag = true;
    }
    this.setData({
      color
    });
  }
})