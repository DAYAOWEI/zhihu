var util = require('../../utils/util.js')
Page({
  data: {
    navTab: ["推荐", "圆桌", "热门", "收藏"],
    currentNavtab: "0",
    imgUrls: [
      '../../images/24213.jpg',
      '../../images/24280.jpg',
      '../../images/1444983318907-_DSC1826.jpg'
    ],
    lists:['推荐','圆桌','热门','收藏'],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    feed: [],
    feed_length: 0,
    current:0,
    items:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //初始化数据
    var that = this
    //调用应用实例的方法获取全局数据
    this.refresh();
  },
   //更新数据
    refresh: function(){
      var feed = util.getDiscovery();
      console.log("loaddata");
      var feed_data = feed.data;
      this.setData({
        feed:feed_data,
        items:feed_data,
        feed_length: feed_data.length
      });
    },
    switchTab(e){
      
      this.setData({
        current:e.currentTarget.dataset.idx
      })
      console.log(this.data.current)
     if(this.data.current!==0){
      let item=[]
      item.push(e.currentTarget.dataset.idx)
       this.setData({
         feed:item
       })
     }else{
       let item=[]
       item=this.data.items
       this.setData({
         feed:item
       })
     }
    }
})