// pages/info/info.js
const app = getApp();

Page({
    /**
     * 页面的初始数据
     */
    data: {

    },

    loginout() {
        wx.removeStorageSync('sessionId')
        wx.removeStorageSync('user')
    }
})