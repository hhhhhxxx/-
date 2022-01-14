// app.js
import { patientTabBar, doctorTabBar } from '/utils/tabBarUrl.js'

App({
    onLaunch () {
        // 展示本地存储能力
        
        // 默认登录
        this.globalData.tabBarList = patientTabBar

        const sessionId = wx.getStorageSync('sessionId') || ''
        const user = wx.getStorageSync('user') || ''
        const roleInfo = wx.getStorageSync('roleInfo') || ''

        if(sessionId != '' && user != '' && roleInfo != '') {
            if(user.roleId == 1) {
                this.globalData.tabBarList = patientTabBar
                this.globalData.userRole = 1
            } else {
                this.globalData.tabBarList = doctorTabBar
                this.globalData.userRole = 2
            }
        } 
        

        // console.log(patientTabBar)

        // 登录
        wx.login({
            success: res => {
               
            }
        })
    },
    globalData: {
        userRole: 1,
        tabBarList: [], // tabBar
    }
})
