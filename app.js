App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log('APP Launch')
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log('APP Show')
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('APP Hide')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('APP Error')
  }
})
/**
 * 1、前、后台的定义：当用户点击左上角关闭，或者按Home键离开微信，小程序并没有直接销毁，而是进  * 入了后台，当再次进入微信或再次打开小程序时，又从后台进入了前台。
 * 2、只有小程序进入后台一定时间，或者系统资源占用过高才会被真正销毁。
 * 
 */
