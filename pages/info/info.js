// pages/info/info.js
const app = getApp();

Page({
    /**
     * 页面的初始数据
     */
    data: {
        roleInfo: {
            name: '',
        }
    },

    loginout() {
        wx.removeStorageSync('sessionId')
        wx.removeStorageSync('user')
        wx.removeStorageSync('roleInfo')
        app.globalData.tabBarList = ''
        app.globalData.userRole = ''
    },
    onReady: function () {
        // wx.removeStorageSync('sessionId')
        // wx.removeStorageSync('user')
        // console.log(1223)
        const {name} = wx.getStorageSync('roleInfo');
        console.log(name)
        this.setData({
            name: name,
        })
    },
    onShow: function () {

        this.setData({
            userRole: app.globalData.userRole,
        })

        if (typeof this.getTabBar === 'function' && 
            this.getTabBar()) {
                this.getTabBar().setData({
                    selected: 3,
                    list: app.globalData.tabBarList
                })
        }
    }
})