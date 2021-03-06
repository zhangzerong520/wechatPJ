function getTopics(that) {
  wx.showLoading({
    title: '加载中',
  })
  wx.request({
    url: 'http://172.16.112.27:8080/topic/all',
    method: 'get',
    success: res => {
      wx.hideLoading();
      if (res.statusCode == 200) {
        var tInfo = {};
        console.log("获取的信息", res)
        Object.assign(tInfo, res.data);
        that.setData({
          toplicsInfo: tInfo

        })
        console.log(that.data.toplicsInfo)
      } else {
        wx.showToast({
          title: '数据请求失败',
          image: '/assets/news/cannel.png'
        })
      }

    }
  })
}

function getTopicDetail(that, id) {
  wx.showLoading({
    title: '数据加载中',
  })
  wx.request({
    url: 'http://172.16.112.27:8080/topic/' + id,
    success(res) {
      wx.hideLoading();
      if (res.statusCode == 200) {
        var data = res.data;
        that.setData({
          topic: data
        })
        console.log(data)
      } else {
        wx.showToast({
          title: '数据加载失败',
          image: '/assets/news/cannel.png'
        })
      }

    }
  })
}

function search(that, title) {
  wx.showLoading({
    title: '搜索中...',
  })
  wx.request({
    url: 'http://172.16.112.27:8080/topic/query/' + title,
    success: res => {
      wx.hideLoading()
      if (res.statusCode == 200) {
        if (res.data.length != 0) {
          var lists = [];
          for (var i = 0; i < res.data.length; i++) {
            var obj = {};
            Object.assign(obj, res.data[i]);
            lists.push(obj)
          }
          that.setData({
            toplists: lists
          })
        }
        else {
          wx.showToast({
            title: '搜索不到',
            image: '/assets/news/xx.png'
          })
        }
      }
      else {
        wx.showToast({
          title: '数据加载失败',
          image: '/assets/news/xx.png'
        })
      }

    }
  })

}


module.exports = {
  getTopics,
  getTopicDetail,
  search
}