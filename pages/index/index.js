//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    count: 0,
    page: 4,
    nav:[],
    height:700,
    ff:true,
    list:[],
    down:[],
    "swiper":[],
    "bargain":[],
    "grop":[],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  search(){
      wx.navigateTo({
        url:"/pages/search/search",
      })
  },
  onLoad() {
  let  url='https://api.it120.cc/wenjie/shop/goods/category/all'
   let url1="https://api.it120.cc/wenjie/shop/goods/list?recommendStatus=1"
   let url2 = "https://api.it120.cc/wenjie/banner/list"
   let url3="https://api.it120.cc/wenjie/shop/goods/list?kanjia=true"
   let url4="https://api.it120.cc/wenjie/shop/goods/list?pingtuan=true"
   let url5 = "https://api.it120.cc/wenjie/shop/goods/list"
    wx.request({
    url:url,
      success:(res)=> {
        console.log(res)
        if (res.statusCode == 200) {
          this.setData({
            nav:res.data.data
          })
        }
      }
    })
    wx.request({
      url:url5,
        success:(res)=> {
          console.log(res)
          if (res.statusCode == 200) {
            this.setData({
             down:res.data.data.splice(this.data.count, this.data.page)
            })
          }
        }
      })
    wx.request({
      url:url4,
        success:(res)=> {
          console.log(res)
          if (res.statusCode == 200) {
            this.setData({
              grop:res.data.data
            })
          }
        }
      })
    // 疯狂砍价
    wx.request({
      url:url3,
        success:(res)=> {
          console.log(res)
          if (res.statusCode == 200) {
            this.setData({
              bargain:res.data.data
            })
          }
        }
      })
      // 轮播图
    wx.request({
      url:url2,
        success:(res)=> {
          if (res.statusCode == 200) {
            this.setData({
              swiper:res.data.data
            })
          }
        }
      })
      // 精品推荐
    wx.request({
      url:url1,
        success:(res)=> {
          console.log(res)
          if (res.statusCode == 200) {
            this.setData({
                list:res.data.data
            })
          }
        }
      })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  dianji(e){
    let {id} = e.currentTarget.dataset
       wx.navigateTo({
         url: `/pages/connect/connect?id=${id}`,
       })
  },
  down(){
    if (this.data.ff) {
      wx.showLoading()
      wx.getSystemInfo({
        success: (res) => {
          this.setData({
            height: res.windowHeight,
            ff: false
          })
        }
      })
      wx.request({
        url: "https://api.it120.cc/wenjie/shop/goods/list",
        method: "GET",
        success: (res) => {
          let count = this.data.count + 4
          let page = this.data.page + 4
          var ll = res.data.data.slice(count, page);
          ll.forEach((v, k) => {
            this.data.down.push(v);
          });
          if (res.statusCode == 200) {
            this.setData({
              count: count,
              page: page,
              down: this.data.down,
              ff: true,
            })
            wx.hideLoading()
          }
        }

      })

      console.log("到低部了")
    }

  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
