// pages/index/index.js
var util = require('../../utils/util.js')
var app=getApp()
Page({
  data: {
    feed:[],
    feed_length:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this
    //调用方法更新数据
    this.getData();
  },
  //点击触发方法
  bindItemTap(){
    wx:wx.navigateTo({
      url: '../answer/answer'
    })
  },
  bindQueTap(){
    wx:wx.navigateTo({
      url: '../question/question'
    })
  },
  //属性方法
  getData(){
    let feed = util.getData2();
    let feed_data=feed.data;
    console.log(feed_data)
    console.log("nihao")
    this.setData({
      feed:feed_data,
      feed_length:feed_data.length
    })
  },

})