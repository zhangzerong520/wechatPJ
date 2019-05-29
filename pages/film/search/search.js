Page({

  /**
   * 页面的初始数据
   */
  data: {
    movielist: [],
    query:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '搜索'
    })
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#ffffff',
    })
   
  },
  redirect_film:function(e){
    wx.navigateBack({
      url:"./film/film"
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  confirm:function(e){
    var id = e.detail.value;
    this.require = require('../../../api/movie.js');
    this.require.search(this, id);
    console.log(e.detail.value);
    this.setData({
      query: id
    })
  },
  loadDetail:function(e){
    var id = e.currentTarget.id;
    wx.navigateTo({
      url: "../filmInfo/filmDetail/filmDetail?id=" + id
    })
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