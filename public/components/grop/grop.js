// public/components/grop/grop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
          grop:{
          type:Array
          }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    pin(e){
      console.log(e)
     let {id} = e.currentTarget.dataset
      wx.navigateTo({
        url: `/pages/connect/connect?id=${id}`,
      })
    }
  }
})
