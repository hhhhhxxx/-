// app.js
import { patientTabBar, doctorTabBar } from '/utils/tabBarUrl.js'

App({
    onLaunch () {
        // 展示本地存储能力
        // const logs = wx.getStorageSync('logs') || []
        // logs.unshift(Date.now())
        // wx.setStorageSync('logs', logs)
        // 默认登录
        const loginSession = wx.getStorageSync('loginSession') || '123'
        wx.setStorageSync('loginSession', loginSession)
        this.globalData.tabBarList = patientTabBar
        this.globalData.userRole = "patient"
        // console.log(patientTabBar)

        // 登录
        wx.login({
            success: res => {
                // console.log("登录: ",res.code)
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            }
        })
    },
    globalData: {
        userRole: "patient",
        tabBarList: [], // tabBar
    }
})
