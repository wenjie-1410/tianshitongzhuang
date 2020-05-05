// public/components/list/list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     down:{
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
        dianji(e){
          console.log(e)
          let {id} = e.currentTarget.dataset
          console.log(id)
        wx.navigateTo({
          url: `/pages/connect/connect?id=${id}`,
        })
        }
  }
})
