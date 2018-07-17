var flag = true;

Page({
  data: {
    text: '大礼包-宝马',
    array: [{
      value: 'red'
    }, {
      value: 'yellow'
    }],
    color: 8023
  },
  onLoad: function(options) {

  },
  onReady: function() {
    // Do something when page ready.
  },
  onShow: function(e) {

  },
  onHide: function() {
    // Do something when page hide.
  },
  onUnload: function() {
    // Do something when page close.
  },
  onPullDownRefresh: function() {
    // Do something when pull down.
  },
  onReachBottom: function() {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function() {
    // return custom share data when user share.
  },
  onPageScroll: function() {
    // Do something when page scroll
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  // Event handler.
  viewTap: function() {
    this.setData({
      text: 'Set some data for updating view.'
    }, function() {
      // this is setData callback
    })
  },
  click: function() {
    if (flag) {
      color = 'red';
      flag = false;
    } else {
      color = 'yellow';
      flag = true;
    }
    this.setData({
      text: e.detail.value
    })
  },
})