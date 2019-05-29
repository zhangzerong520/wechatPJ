// pages/me/me.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 查看是否授权
    // wx.getSetting({
    //   success: function(res) {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称
    //       wx.getUserInfo({
    //         success: function(res) {
    //           console.log("已经授权。。。" + res.userInfo)
    //         }
    //       })
    //     }
    //   }
    // })
    this.require = require('../../api/app.js');
    this.require.login(this);
    this.setData({
      userInfo: app.globalData.userInfo,
    })
  },
  showUserInfo: function(e) {
    wx.navigateTo({
      url: './meInfo/meInfo',
    })
  },
  showyl:function(e){
    wx.navigateTo({
      url: '../yule/yule',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  showMovie: function() {
    wx.navigateTo({
      url: '../film/film',
    })
  },
  showmap:function(){
    var url = "https://www.sise.com.cn/720hr/";
    wx.navigateTo({
      url: '../public/public?url='+url,
    })
  },
  showMy:function(){
    var url = "http://class.sise.com.cn:7001/sise/";
    wx.navigateTo({
      url: '../public/public?url=' + url,
    })
  },
  showReading: function () {
    var url = "http://lib.sise.com.cn/";
    wx.navigateTo({
      url: '../public/public?url=' + url,
    })
  },
  showHelp: function () {
    var url = "https://mp.weixin.qq.com/s/_vtY97dME2pyM-dB83wQGQ";
    wx.navigateTo({
      url: '../public/public?url=' + url,
    })
  },
  showTeenage: function() {
    var url = "https://www.12355.net/wechat/index.html";
    wx.navigateTo({
      url: '../public/public?url=' + url,
    })
  },
  showBaibaox: function () {
    var url = "http://ecard.scse.com.cn:8070/Home/Index";
    wx.navigateTo({
      url: '../public/public?url=' + url,
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

  },

  bindGetUserInfo: function(event) {

    console.log(event.detail.userInfo)
    //使用
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.login({
            success: function(res) {
              var code = res.code; //登录凭证
              if (code) {
                //2、调用获取用户信息接口
                wx.getUserInfo({
                  success: function(res) {
                    console.log({
                      encryptedData: res.encryptedData,
                      iv: res.iv,
                      code: code
                    })
                    //3.请求自己的服务器，解密用户信息 获取unionId等加密信息
                    wx.request({
                      url: 'http://localhost:8080/login/dologin', //自己的服务接口地址
                      method: 'post',
                      header: {
                        'content-type': 'application/x-www-form-urlencoded'
                      },
                      data: {
                        encryptedData: res.encryptedData,
                        iv: res.iv,
                        code: code
                      },
                      success: function(data) {

                        //4.解密成功后 获取自己服务器返回的结果
                        if (data.data.status == 1) {
                          var userInfo_ = data.data.userInfo;
                          Object.assign(getApp().globalData.userInfo, data.data.userInfo);
                          wx.showToast({
                            title: '授权成功',
                            image: '/assets/me/gou.png'
                          })
                        } else {
                          console.log('解密失败')
                        }

                      },
                      fail: function() {
                        console.log('系统错误')
                      }
                    })
                  },
                  fail: function() {
                    console.log('获取用户信息失败')
                  }
                })

              } else {
                console.log('获取用户登录态失败！' + r.errMsg)
              }
            },
            fail: function() {
              console.log('登陆失败')
            }
          })

        } else {
          console.log('获取用户信息失败')

        }

      }
    })

  }
})