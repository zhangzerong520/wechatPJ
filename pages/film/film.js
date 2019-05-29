//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentTab: 0,
    winWidth: 0,
    winHeight: 0,
    indicatorts: true,
    autoplay: true,
    interval: 5000,
    duration: 500,
    movieInfo: [],
    length:0,
    videoUrl: '', //视频路径
    coverUrl: '/images/food/food_img.jpg', //视频封面图
    duration: '00:40', //视频时长

    imgUrls: [
      "http://172.16.112.27/assets/haibao/xc1.jpg",
      "http://172.16.112.27/assets/haibao/xc2.jpg",
      "http://172.16.112.27/assets/haibao/xc3.jpg",
      "http://172.16.112.27/assets/haibao/xc4.jpg",
      "http://172.16.112.27/assets/haibao/xc5.jpg"
    ],
    currentTab: 0,
  },
  //事件处理函数
  onLoad: function() {

    this.require = require('../../api/movie.js');
    this.require.getMovie(this);
   
  },
  showAll:function(){
   wx.navigateTo({
     url: './filmInfo/filmInfo',
   })
  },
  showWillAll: function () {
    wx.navigateTo({
      url: './filmInfo/filmInfo',
    })
  },
  loadDetail: function (e) {
    var id = e.currentTarget.id;
    wx.navigateTo({
      url: "./filmInfo/filmDetail/filmDetail?id=" + id
    })
  },
  loadDetails: function (e) {
    var id = e.currentTarget.id;
    wx.navigateTo({
      url: "./filmInfo/filmDetail/filmDetail?id=" + id
    })
  },
  search_view: function (e) {
    wx.navigateTo({
      url: './search/search',
    })
  },
  show_area:function(e){
    wx.navigateTo({
      url: './area/area',
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

  }
})