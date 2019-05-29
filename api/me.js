/**
 * 获取个人信息
 */
function getUserInfo(that) {
  wx.showLoading({
    title: '加载个人信息',
  })
  wx.request({
    url: 'http://129.204.236.241:8080/miniprogram/me/findMymessage.action?token=' + getApp().globalData.token,
    method: 'get',
    success: res => {
      wx.hideLoading()
      console.log('个人信息：', res)
      if (res.statusCode == 200) {
        var obj = {};
        Object.assign(obj, res.data.resume)
        that.setData({//缓存初始化数据，避免数据为改变时 被清
          realUserInfo: obj,
          newName: res.data.resume.name,
          newSex: res.data.resume.gender,
          newEdu: res.data.resume.eduction,
          newAddress: res.data.resume.area,
          newPhone: res.data.resume.telephone,
          newEmail: res.data.resume.email,
          newText: res.data.resume.introduction
        })
        console.log("真实信息：", that.data.realUserInfo);
      }
    }
  })
}

module.exports = {
  getUserInfo
}