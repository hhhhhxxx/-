// index.js
import { patientTabBar, doctorTabBar } from '../../utils/tabBarUrl'
// 获取应用实例
const app = getApp()

Page({
  data: {
  },

  changePatient () {
    app.globalData.tabBarList =  patientTabBar
    app.globalData.userRole =  "patient"
    wx.switchTab({
      url: '/pages/data/data',
    })
  },
  // 商户
  changeDoctor () {
    app.globalData.tabBarList =  doctorTabBar
    app.globalData.userRole =  "doctor"
    wx.switchTab({
      url: '/pages/manage/manage',
    })
  } 
})
