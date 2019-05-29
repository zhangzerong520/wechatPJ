function getMovie(that) {
  wx.showLoading({
    title: '加载中',
  })
  wx.request({
    url: 'http://172.16.112.27:8084/movie/findAll.action',
    method: 'get',
    success: res => {
       wx.hideLoading();
      if (res.statusCode == 200) {
        var mInfo = {};
        var length = 0;
        console.log("获取的信息", res)
        Object.assign(mInfo, res.data);
      
        console.log("length"+length);
        that.setData({
          movieInfo: mInfo
      
        })
        console.log(that.data.movieInfo)
      } else {
        wx.showToast({
          title: '数据请求失败',
          image: './images/xx.png'
        })
      }

    }
  })
}

function getfilmDetail(that, id) {
  wx.showLoading({
    title: '数据加载中',
  })
  wx.request({
    url: 'http://172.16.112.27:8084/movie/findMovieById.action?id=' + id,
    success(res) {
      wx.hideLoading();
      if (res.statusCode == 200) {
        var data = res.data;
        that.setData({
          movie: data
        })
        console.log(data)
      } else {
        wx.showToast({
          title: '数据加载失败',
          image: './images/xx.png'
        })
      }

    }
  })
}

function search(that, name) {
  wx.showLoading({
    title: '搜索中...',
  })
  wx.request({
    url: 'http://172.16.112.27:8084/movie/query.action?key=' + name,
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
            movielist: lists
          })
        } else {
          wx.showToast({
            title: '搜索不到',
            image: './images/xx.png'
          })
        }
      } else {
        wx.showToast({
          title: '数据加载失败',
          image: './images/xx.png'
        })
      }
      console.log("搜索", res)
    }
  })

}

module.exports = {
  getMovie,
  getfilmDetail,
  search
}