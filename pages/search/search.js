// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    list:[],
    arr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad() {
   
    this.setData({
        search: this.search.bind(this)
    })
   
},
search: function (value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
              wx.request({
                url:"https://api.it120.cc/wenjie/shop/goods/list",
                method:"GET",
                header:{
                  'content-type':'application/text'
                },
                  success:(res)=> {
                    console.log(res)
                    if (res.statusCode == 200) {
                      console.log( res.data.data)
                        let list  = res.data.data.filter((v)=>{
                          if(v.name.includes(value)){
                             return v
                          }

                        })
                        this.setData({
                            arr:list
                        })
                    }
                  }
                })
            )
        }, 200)
    })
},
selectResult: function (e) {
    console.log('select result', e.detail)
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