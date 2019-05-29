// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    indicatorts: true,
    autoplay: true,
    interval: 5000,
    duration: 500,
    movieInfo: [],
    length: 0,
    videoUrl: '/assets/video/test.mp4', //视频路径
    duration: '00:40', //视频时长
    videoimage: "block", //默认显示封面
    imgUrls: [
      "https://www.sise.com.cn/Uploads/2019-04-01/5ca1e19f5fde5.jpg",
      "https://www.sise.com.cn/Uploads/2019-03-25/5c982b90a6cad.jpg",
      "https://www.sise.com.cn/Uploads/2019-05-16/5cdd248ad196c.jpg",
      "https://www.sise.com.cn/Uploads/2019-04-15/5cb3ea077a604.jpg",
      "https://www.sise.com.cn/Uploads/2019-03-08/5c82270f9f681.jpg",
    ],
    imglist: [
      'https://www.sise.com.cn/Public/images/2018book/1min.png',
      'https://www.sise.com.cn/Public/images/2018book/2min.png',
      'https://www.sise.com.cn/Public/images/2018book/3min.png',
      'https://www.sise.com.cn/Public/images/2018book/4min.png',
      'https://www.sise.com.cn/Public/images/2018book/5min.png',
      'https://www.sise.com.cn/Public/images/2018book/6min.png',
      'https://www.sise.com.cn/Public/images/2018book/7min.png',
      'https://www.sise.com.cn/Public/images/2018book/8min.png',
      'https://www.sise.com.cn/Public/images/2018book/9min.png',
      'https://www.sise.com.cn/Public/images/2018book/10min.png',
      'https://www.sise.com.cn/Public/images/2018book/11min.png',
      'https://www.sise.com.cn/Public/images/2018book/12min.png',
      'https://www.sise.com.cn/Public/images/2018book/13min.png',      'https://www.sise.com.cn/Public/images/2018book/14min.png',
      'https://www.sise.com.cn/Public/images/2018book/15min.png',
      'https://www.sise.com.cn/Public/images/2018book/16min.png',
      'https://www.sise.com.cn/Public/images/2018book/17min.png',
      'https://www.sise.com.cn/Public/images/2018book/16min.png',
    ],
    imglists: [
      "https://www.sise.com.cn/Public/images/2018book/1.png",
      "https://www.sise.com.cn/Public/images/2018book/2.png",
      "https://www.sise.com.cn/Public/images/2018book/3.png",
      "https://www.sise.com.cn/Public/images/2018book/4.png",
      "https://www.sise.com.cn/Public/images/2018book/5.png",
      "https://www.sise.com.cn/Public/images/2018book/6.png",
      "https://www.sise.com.cn/Public/images/2018book/7.png",
      "https://www.sise.com.cn/Public/images/2018book/8.png",
      "https://www.sise.com.cn/Public/images/2018book/9.png",
      "https://www.sise.com.cn/Public/images/2018book/10.png",
      "https://www.sise.com.cn/Public/images/2018book/11.png",
      "https://www.sise.com.cn/Public/images/2018book/12.png",
      "https://www.sise.com.cn/Public/images/2018book/13.png",
      "https://www.sise.com.cn/Public/images/2018book/14.png",
      "https://www.sise.com.cn/Public/images/2018book/15.png",
      "https://www.sise.com.cn/Public/images/2018book/16.png",
   
    ],



  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
  
  },
//点击视频时播放
  // bindplay: function(e) {
  //   this.setData({
  //       tab_image: "none"
  //     }),
  //     this.videoCtx.play()
  // },
  onReady() {
    this.videoCtx = wx.createVideoContext('myVideo')
  },
 
  previewImage: function(e) {
    var that = this,
      //获取当前图片的下表
      index = e.currentTarget.dataset.index,
      //数据源
      imglists = this.data.imglists;
    wx.previewImage({
      //当前显示下表
      current: imglists[index],
      //数据源
      urls: imglists
    })
  },
  showAll:function(){
    wx.navigateTo({
      url: '../news/news'
    })
  },
  showPic:function(){
    wx.navigateTo({
      url: '../picture/picture'
    })
  },
  showMedium:function(){
    wx.navigateTo({
      url: '../medium/medium'
    })
  },
  showLearing:function(){
    wx.navigateTo({
      url: '../learing/learing'
    })
  },
  showZs: function () {
    wx.navigateTo({
      url: '../recruit/recruit'
    })
  },
  Entrymedium:function(){
   wx.navigateTo({
     url: '../medium/mediumDetail/mediumDetail?id=1',
   })
  },
  EntryNews1:function(){
    wx.navigateTo({
      url: '../news/newsDetail/newsDetail?id=1',
    })
  },
  EntryNews2: function () {
    wx.navigateTo({
      url: '../news/newsDetail/newsDetail?id=6',
    })
  },
  EntryNews3: function () {
    wx.navigateTo({
      url: '../news/newsDetail/newsDetail?id=8',
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },
  /**
   * 滑动切换tab
   */
  bindChange: function(e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });

  },
  /**
   * 点击tab切换
   */
  switchNav: function(e) {
    var that = this;
    if (this.data.currentTab === e.currentTarget.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.currentTarget.dataset.current
      })
    }
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})