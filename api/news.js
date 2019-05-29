function getNews(that) {
  wx.showLoading({
    title: '加载中',
  })
  wx.request({
    url: 'http://172.16.112.27:8080/news/all',
    method: 'get',
    success: res => {
      wx.hideLoading();
      if (res.statusCode == 200) {
        var nInfo = {};
        var length = 0;
        console.log("获取的信息", res)
        Object.assign(nInfo, res.data);
        
        console.log("length" + length);
        that.setData({
          newsInfo: nInfo

        })
        console.log(that.data.newsInfo)
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
    url: 'http://172.16.112.27:8080/news/' + id,
    success(res) {
      wx.hideLoading();
      if (res.statusCode == 200) {
        var data = res.data;
        that.setData({
          news: data
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

function pageNews(that, start, count) {
  wx.showLoading({
    title: '数据加载中',
  })
  wx.request({
    url: 'http://localhost:8080/news/find?start=' + start +'&&count='+count,
    success(res) {
      wx.hideLoading();
      if (res.statusCode == 200) {
        var nInfo = {};
        Object.assign(nInfo, res.data.pageList);
        that.setData({
          pageInfo: nInfo
        })
        console.log(that.data.pageInfo)
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
  getNews,
  getNewsDetail,
  pageNews
}