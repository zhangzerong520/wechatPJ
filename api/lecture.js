function getLecture(that) {
  wx.showLoading({
    title: '加载中',
  })
  wx.request({
    url: 'http://172.16.112.27:8080/lecture/all',
    method: 'get',
    success: res => {
      wx.hideLoading();
      if (res.statusCode == 200) {
        var linfo = {}; 
        console.log("获取的信息", res)
        Object.assign(linfo, res.data);
        that.setData({
          lectureInfo: linfo

        })
        console.log(that.data.lectureInfo)
      } else {
        wx.showToast({
          title: '数据请求失败',
          image: '/assets/news/xx.png'
        })
      }

    }
  })
}

function getLectureId(that, id) {
  wx.showLoading({
    title: '数据加载中',
  })
  wx.request({
    url: 'http://172.16.112.27:8080/lecture/' + id,
    success(res) {
      wx.hideLoading();
      if (res.statusCode == 200) {
        var data = res.data;
        that.setData({
          lecture: data
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
  getLecture,
  getLectureId
}