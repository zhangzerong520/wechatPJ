function getMedium(that) {
  wx.showLoading({
    title: '加载中',
  })
  wx.request({
    url: 'http://172.16.112.27:8080//medium/all',
    method: 'get',
    success: res => {
      wx.hideLoading();
      if (res.statusCode == 200) {
        var mInfo = {};
        var length = 0;
        console.log("获取的信息", res)
        Object.assign(mInfo, res.data);

        console.log("length" + length);
        that.setData({
          mediumInfo: mInfo

        })
        console.log(that.data.mediumInfo)
      } else {
        wx.showToast({
          title: '数据请求失败',
          image: '/assets/news/xx.png'
        })
      }

    }
  })
}

function getNewsDetail(that, id) {
  wx.showLoading({
    title: '数据加载中',
  })
  wx.request({
    url: 'http://172.16.112.27:8080/medium/' + id,
    success(res) {
      wx.hideLoading();
      if (res.statusCode == 200) {
        var data = res.data;
        that.setData({
          medium: data
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
  getMedium,
  getNewsDetail
}