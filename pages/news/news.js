// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsInfo: [],
    pageInfo: [],
    requestUrl: "",
    news: [],
    page: 1,
    totalPages: 4
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // this.require = require('../../api/news.js');
    // this.require.getNews(this);
    var that = this;
    var dataUrl = "http://localhost:8080/news/find?start=1&&count=6";
    that.data.requestUrl = dataUrl;
    console.log("dataUrl的数据为：*-------*" + that.data.requestUrl);

    this.getNewsListData(dataUrl);
    wx.showNavigationBarLoading();

  },
  getNewsListData: function(url) {
    wx.request({
      url: url,
      success: (res) => {
        this.processData(res.data.pageList);
        this.data.page++;
      },
      fail: (error) => {
        console.log(error);
      }
    })
  },
  processData: function(newsItem) {
    //获取总页数
    this.data.totalPages = newsItem.totalPages;
    // console.log("总页数为" + this.data.totalPages);

    var news = [];
    for (var idx in newsItem.content) {
      var items = newsItem.content[idx];
      var temp = {
        id:items.id,
        title: items.title,
        img1: items.img1,
        img2: items.img2,
        img3: items.img3,
        time:items.time
      }
      news.push(temp)
    }
    var totalNews = []
    totalNews = this.data.news.concat(news);
    this.setData({
      news: totalNews
    })
    // this.setData({
    //   movies: movies
    // });
    wx.stopPullDownRefresh();
    wx.hideNavigationBarLoading();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  Detail: function(e) {
    var id = e.currentTarget.dataset.newId;
    wx.navigateTo({
      url: 'newsDetail/newsDetail?id=' + id,
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
    var page = this.data.page;
    var refreshUrl = "http://localhost:8080/news/find" + "?start=" + page + "&count=6";
    console.log("refreshUrl的数据为-------" + refreshUrl);

    this.data.news = [];
    this.getNewsListData(refreshUrl);
    wx.showNavigationBarLoading();


    if (page > this.data.totalPages)
      wx.showToast({
        title: '没有数据了',
        image: "/assets/news/canel.png",
        duration: 1500
      })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

    var page = this.data.page;

    if (page <= this.data.totalPages)
    wx.showLoading({
      title: '加载中...',
    })

    var nextUrl = "http://localhost:8080/news/find" + "?start=" + page + "&count=6";
    console.log("nextUrl的数据为-------" + nextUrl);
    this.getNewsListData(nextUrl);
    wx.hideLoading();


    if (page > this.data.totalPages)
    wx.showToast({
      title: '没有数据了',
      image: "/assets/news/canel.png",
      duration: 1500
    })
    

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})