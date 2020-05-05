// public/components/bargain/bargain.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
        bargain:{
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
       kan(e){
         console.log(e)
        let {id} = e.currentTarget.dataset
         wx.navigateTo({
           url: `/pages/connect/connect?id=${id}`,
         })
       }
  }
})
