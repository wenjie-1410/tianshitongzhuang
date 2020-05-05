// pages/connect/connect.js
let WxParse=require("../../wxParse/wxParse.js")
import Toast from '../../miniprogram_npm/vant-weapp/toast/toast';
Page({
  onClickIcon() {
    Toast('点击图标');
  },

  onClickButton() {
    Toast('点击按钮');
  },
  /**
   * 页面的初始数据
   */
  data: {
          list:[],
          img:[],
          num:0,
        
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

      let {id} = options
      let url = `https://api.it120.cc/wenjie/shop/goods/detail?id=${id}`
      wx.request({
        url: url,
        success:(res)=>{
          console.log(res)
          WxParse.wxParse('lwj', 'html',res.data.data.content, this, 5);
          this.setData({
             list:res.data.data.basicInfo,
             img:res.data.data.pics
          })
       
        }
      })
  },
search(){

},
onClickIcon(e){
  let {id} = e.currentTarget.dataset
  Toast.success('收藏啦');
  wx.request({
    method:"POST",
    url: `https://api.it120.cc/wenjie/shop/goods/fav/add?token=be2735bd-9fde-47ed-9cad-870e5e484a3c&goodsId=${id}`,
  })
},
jia(e){
Toast.success('加入购物车');
let {id} = e.currentTarget.dataset
wx.request({
method:"POST",
  url: `https://api.it120.cc/wenjie/shopping-cart/add?token=be2735bd-9fde-47ed-9cad-870e5e484a3c&goodsId=${id}&number=${1} `,
})
},
on(){
  wx.reLaunch({
    url: '/pages/shop/shop',
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