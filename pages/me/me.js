// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
      is:true,
      user:{
        img:'../../images/icon8.jpg ',
        name:'xxx',
         weixin:'未登陆'
        },
        items:[{
          img:'../../images/eye.png',
          text:'我的关注'
        },
        {
          img:'../../images/star.png',
          text:'我的收藏'
        },
        {
          img:'../../images/draft.png',
          text:'我的草稿'
        },
        {
          img:'../../images/recent.png',
          text:'最近浏览'
        },
        {
          img:'../../images/book.png',
          text:'我的书架'
        },
        {
          img:'../../images/live.png',
          text:'我的live'
        },
        {
          img:'../../images/zhi.png',
          text:'我的知乎'
        },
      ]

  },
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("nihao")
    // 查看是否授权
    wx.getSetting({
      success (res){
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })
  },
  bindGetUserInfo (e) {
    console.log(e.detail.userInfo)
  }
  ,
  login(){
    console.log("Nihao")
    // 必须是在用户已经授权的情况下调用
wx.getUserInfo({
  success: function(res) {
    var userInfo = res.userInfo
    var nickName = userInfo.nickName
    var avatarUrl = userInfo.avatarUrl
    console.log(userInfo,nickName,avatarUrl)
  }
})

  },
 
  
})