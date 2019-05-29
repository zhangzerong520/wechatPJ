// pages/filmDetail/filmDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie:[],
   
    winWidth: 0,
    winHeight: 0,
    liked:false,
    id:0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    this.require = require('../../../../api/movie.js');
    this.require.getfilmDetail(this,id);
   
    wx.setNavigationBarTitle({
      title: '电影详情'
    })
  
    
    // var id = options.id;
    // var wid = options.wid;
    // var page = this;

    // if (id != null){
    // var filmlist = wx.getStorageSync("filmlist");
    // var filmdetail = filmlist[id - 1];
    // page.setData({
    //   film: filmdetail
    // })
    // wx.setNavigationBarTitle({
    //     title: filmdetail.title,
    //   });
    // }else{
    //   var will_publiclist = wx.getStorageSync("will_publiclist");
    //   var will_publiclist = will_publiclist[wid - 1];
    //   page.setData({
    //     film: will_publiclist
    //   })
      // wx.setNavigationBarTitle({
      //   title: movieInfo.subjects.original_title ,
      // });
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