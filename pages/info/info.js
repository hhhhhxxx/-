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
        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {

            const app = getApp();
            if (app.globalData.userRole == "patient") {
                this.getTabBar().setData({
                    selected: 3,
                    list: app.globalData.tabBarList
                })
            } else if(app.globalData.userRole == "doctor") {
                this.getTabBar().setData({
                    selected: 2,
                    list: app.globalData.tabBarList
                })
            }
        }
    }
})