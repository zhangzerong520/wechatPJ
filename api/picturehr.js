function getPicture(that, id) {
  wx.showLoading({
    title: '数据加载中',
  })
  wx.request({
    url: 'http://172.16.112.27:8080/picture/' + id,
    success(res) {
      wx.hideLoading();
      if (res.statusCode == 200) {
        var data = res.data;
        that.setData({
          picture: data
        })
        console.log(data)
      } else {
        wx.showToast({
          title: '数据加载失败',
          image: '/assets/news/xx.png'
        })
      }
    }
  })
}
module.exports = {
  getPicture
}