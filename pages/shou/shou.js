// pages/shou/shou.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
     wx.request({
       url: 'https://api.it120.cc/wenjie/shop/goods/fav/list?token=be2735bd-9fde-47ed-9cad-870e5e484a3c',
       success:res=>{
         console.log(res)
        this.setData({
              list:res.data.data
         })
       
       }
     })
  },
del(e){
let {id} = e.currentTarget.dataset
wx.request({
  url: `https://api.it120.cc/wenjie/shop/goods/fav/delete?goodsId=${id}&token=be2735bd-9fde-47ed-9cad-870e5e484a3c`,
  success:res=>{
    wx.request({
      url: 'https://api.it120.cc/wenjie/shop/goods/fav/list?token=be2735bd-9fde-47ed-9cad-870e5e484a3c',
      success:res=>{
        console.log(res)
       this.setData({
             list:res.data.data
        })
      
      }
    })
  }
})
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