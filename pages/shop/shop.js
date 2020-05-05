// pages/shop/shop.js
Page({
  onChange(event) {
    console.log(event.detail);
    this.data.list.forEach((v) => {
      v.number++
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    hu: 0,
    nu: 0,
    price:0
  },
  onSubmit() {

  },
  del(e) {
    this.ff()
    let {
      index
    } = e.currentTarget.dataset
    console.log(index)
    wx.request({
      method: "POST",
      url: `https://api.it120.cc/wenjie/shopping-cart/remove?token=be2735bd-9fde-47ed-9cad-870e5e484a3c&key=${index}`,
      success: res => {
        console.log(res)
        if (res.statusCode === 200) {
          if (res.data.code === 700) {
            this.setData({
              list:[],
              price:0
            })
            return false
          }
          this.setData({
            list: res.data.data.items,
          })
        }
        wx.request({
          method: "GET",
          url: 'https://api.it120.cc/wenjie/shopping-cart/info?token=be2735bd-9fde-47ed-9cad-870e5e484a3c',
          success: res => {
            console.log(res)
            this.setData({
              list: res.data.data.items,
            })
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.hu()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  hu() {
    console.log(this.data.list)
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onChange(e) {
  this.ff()
    console.log(e)
    let {
      id
    } = e.currentTarget.dataset
    wx.request({
      method: "POST",
      url: `https://api.it120.cc/wenjie/shopping-cart/modifyNumber?token=be2735bd-9fde-47ed-9cad-870e5e484a3c&key=${id}&number=${e.detail}`,
      success: res => {
        this.setData({
            price:res.data.data.price
        })
    
      }
    })
  },
  ff(){
    wx.request({
      method: "GET",
      url: 'https://api.it120.cc/wenjie/shopping-cart/info?token=be2735bd-9fde-47ed-9cad-870e5e484a3c',
      success: res => {
        console.log(res)
        this.setData({
          list: res.data.data.items,
          price:res.data.data.price
        })

      }
    })
  },
  onShow: function () {
   this.ff()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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