Page({

  /**
   * 页面的初始数据
   */
  data: {
    queryList: [],
    toplists: [],
    flag: 3
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var flag = options.flag;
    this.setData({
        flag: flag
      }),
      wx.setNavigationBarTitle({
        title: '搜索'
      })
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#ffffff',
    })

  },
  redirect_film: function(e) {
    wx.navigateBack({
      url: "./film/film"
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  confirm: function(e) {
    var title = e.detail.value;
    this.require = require('../../../../api/public.js');
    this.require.search(this, title);
  },
  confirms: function(e) {
    var title = e.detail.value;
    this.requires = require('../../../../api/topic.js');
    this.requires.search(this, title);
  },


  entryDetail: function(e) {

    var url = e.currentTarget.dataset.lectureUrl;
    console.log(url);
    wx.navigateTo({
      url: '../../../public/public?url=' + url,
    })

  },
  entryDetails: function(e) {
    var id = e.currentTarget.dataset.topicId;
    wx.navigateTo({
      url: '../../topic/topic?id=' + id,
    })

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