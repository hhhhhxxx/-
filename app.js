// app.js
import { patientTabBar, doctorTabBar } from '/utils/tabBarUrl.js'

App({
    onLaunch () {
        // 展示本地存储能力
        // const logs = wx.getStorageSync('logs') || []
        // logs.unshift(Date.now())
        // wx.setStorageSync('logs', logs)
        
        // 默认登录
        const sessionId = wx.getStorageSync('sessionId') || ''
        const user = wx.getStorageSync('user') || ''
        const roleInfo = wx.getStorageSync('roleInfo') || ''

        if(sessionId != '' && user != '' && roleInfo != '') {
            if(user.roleId == 1) {
                this.globalData.tabBarList = patientTabBar
                this.globalData.userRole = "patient"
            } else {
                this.globalData.tabBarList = doctorTabBar
                this.globalData.userRole = "doctor"
            }
        }
        

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
        userRole: "",
        tabBarList: [], // tabBar
    }
})
