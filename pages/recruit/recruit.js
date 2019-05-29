// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorts: true,
    autoplay: true,
    interval: 5000,
    duration: 500,
    length: 0,
    currentTab: 0,
    publicsInfo: [],
    toplicsInfo:[],
    imgUrls: [
      "http://pic.bibibi.net/recruit/article/1536283205-5219.jpg@1e_1920w_420h_1c_0i_1o_100Q_1x.jpg",
      "http://pic.bibibi.net/recruit/article/1536283322-1213.jpg@1e_1114w_243.6875h_1c_0i_1o_100Q_1x.jpg"
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.require = require('../../api/public.js');
    this.require.getPublics(this);
    this.requires = require('../../api/topic.js');
    this.requires.getTopics(this);

  },
  entryDetail: function(e) {
    var url = e.currentTarget.dataset.lectureUrl;
    wx.navigateTo({
      url: '../public/public?url=' + url,
    })
  },
  entryDetails:function(e){
    var id = e.currentTarget.dataset.topicId;
    wx.navigateTo({
      url: '../recruit/topic/topic?id=' + id,
    })
  },
  showPic: function () {
    wx.navigateTo({
      url: '../picture/picture'
    })
  },
  showmore:function(e){
    var flag = e.currentTarget.dataset.flag;
    wx.navigateTo({
      url: './more/more?flag='+flag,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

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
   * 滑动切换tab
   */
  bindChange: function(e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });

  },
  bindChange1: function (e) {
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
  switchNav1: function (e) {
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})