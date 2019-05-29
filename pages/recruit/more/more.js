// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    publicsInfo: [],
    toplicsInfo: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var flag = options.flag;
    if (flag == 0) {
      this.require = require('../../../api/public.js');
      this.require.getPublics(this);
    } else {
      this.requires = require('../../../api/topic.js');
      this.requires.getTopics(this);
    }
  },
  entryDetail: function(e) {
    var url = e.currentTarget.dataset.lectureUrl;
    wx.navigateTo({
      url: '../../public/public?url=' + url,
    })
  },
  entryDetails: function(e) {
    var id = e.currentTarget.dataset.topicId;
    wx.navigateTo({
      url: '../topic/topic?id=' + id,
    })

  },
  entrySearch: function(e) {
    var flag = e.currentTarget.dataset.flag;
    wx.navigateTo({
      url: './search/search?flag=' + flag,
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})