/**
 * 获取登录获取token
 */
function login(that) {
  wx.login({
    success(r) {
      var code = r.code;
      console.log("code的值为" + code);
      if (code) {
        getApp().globalData.code = code; //将code保存到全局变量
        wx.getUserInfo({
          success: res => {
            console.log("用户信息", res)
            //解密个人信息，并获取登录凭证token
            wx.request({
              url: 'http://localhost:8080/login/dologin',
              method: 'post',
              header: {
                'content-type': 'application/x-www-form-urlencoded'
              },
              data: {
                encryptedData: res.encryptedData,
                iv: res.iv,
                code: code
              },
              success: data => {
                console.log(data)
                if (data.statusCode == 200) { //当状态码为200时 登陆成功
                  getApp().globalData.token = data.data.userInfo.token;
                  Object.assign(getApp().globalData.userInfo, data.data.userInfo);
                  wx.showToast({
                    title: '加载成功',
                  })
                } else {
                  wx.showToast({
                    title: '登录失败',
                    image: '../../assets/icon/xx.png'
                  })
                }
              },
              fail: error => {
                console.log("登录失败：", error)
              }
            })
          },
          fail: error => {
            console.log("用户信息获取失败1" + error);
          }
        })
      } else {
        console.log("登录出错", r.errMsg);
      }
    },
    fail: error => {
      console.log("登录失败", error)
    }
  })

}
module.exports = {
  login
}