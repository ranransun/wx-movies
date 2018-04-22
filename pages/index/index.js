//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://p0.meituan.net/mmc/07508d00711c66320ae094dbd45187da181772.jpg.webp',
      'http://p1.meituan.net/mmc/7bc65df39de1466f5f5c7fbade90cc05137667.jpg.webp',
      'http://p1.meituan.net/mmc/3dcef207d59433fa8688b2d4383b20e7161886.jpg.webp'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    movies:null
  },
  //事件处理函数
  onLoad: function () {
    this.loadmovie()
  },
  loadmovie(){
    wx.showToast({
      title: '正在加载',
      icon:'loading'
    })
    let thispage=this;
    wx.request({
      url: 'http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=1000',
      method:'GET',
      header:{'content-type':'json'},
      success(res){
        let obj=res.data.data.movies;
        thispage.setData({movies:obj});
        console.log(obj)
      }
    })
  }

})
