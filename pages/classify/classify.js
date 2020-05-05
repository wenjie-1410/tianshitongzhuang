// pages/classify/classify.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeKey: 0,
    list: [],
    height: 0,
    arr: [],
    num: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res) => {
        let hh = res.windowHeight - 60
        this.setData({
          height: hh,
        })
      }
    })
    Toast({
      type: 'success',
      message: '提交成功',
      onClose: () => {
        console.log('执行OnClose函数')
      }
    });
    wx.request({
      url: "https://api.it120.cc/wenjie/shop/goods/list?categoryId=123577",
      success: (res) => {
        console.log(res)
        if (res.data.code === 700) {
          this.data.arr = []
        }
        console.log(res)
        if (res.statusCode == 200) {
          this.setData({
            arr: res.data.data || []
          })
        }
      }
    })
    wx.request({
      url: 'https://api.it120.cc/wenjie/shop/goods/category/all',
      success: (res) => {
        if (res.statusCode == 200) {
          this.setData({
            list: res.data.data
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  xiang(e) {
    let {
      id
    } = e.currentTarget.dataset
    console.log(id)
    wx.request({
      url: `https://api.it120.cc/wenjie/shop/goods/list?categoryId=${ id }`,
      success: (res) => {
        if (res.data.code === 700) {
          this.data.arr = []
        }
        console.log(res)
        if (res.statusCode == 200) {
          this.setData({
            arr: res.data.data || []
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },
  gou(e) {
    console.log(e)
    // let num = this.data.number++
    var number
    console.log(number)
    let {
      id
    } = e.currentTarget.dataset
    Toast.success('加入购物车');
    wx.request({
      url: `https://api.it120.cc/wenjie/shopping-cart/add?token=477d2d64-4b08-4460-b123-09e3095a5472&goodsId=${id}&number=${1}`,
      method: "POST",
    })
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
search(){
  wx.navigateTo({
    url:"/pages/search/search",
  })
},
dd(e){
  let {id} = e.currentTarget.dataset
  console.log(id)
wx.navigateTo({
  url: `/pages/connect/connect?id=${id}`,
})
},
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})