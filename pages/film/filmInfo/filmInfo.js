// pages/film/film.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
    movieInfo: [],
   
    currentTab: 0,
    winWidth: 0,
    winHeight: 0,

  },

// loadMovies:function(){
//  var page=this;
// var key=util.getDataKey();
// wx.request({
//   url:"https://zzr.sise.com?apikey="+key,
//   method:"GET",
//   header:{
//     "Content-Type":"json"
//   },
//   success:function(res){
//     console.log(res);
//     var subjects=res.data.subjects;
//     var size=subjects.length;
//     var len=parseInt(size/3);
//     console.log(len);
//     console.log(subjects);
//     page.setData({movies:subjects});
//     page.setData({winHeight:(len+1)*230});
//   }
// })
// },
loadDetail:function(e){
  var id=e.currentTarget.id;
  wx.navigateTo({
    url:"filmDetail/filmDetail?id="+id
  })
  
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
 


    this.require = require('../../../api/movie.js');
    this.require.getMovie(this);

    wx.setNavigationBarTitle({
      title: '电影列表'
    })
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#f0f0f0',
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

  },
   /**
     * 滑动切换tab
     */
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /**
 * 点击tab切换
 */
  switchNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.currentTarget.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.currentTarget.dataset.current
      })
    }
  }

})