import { getRequest, postRequest } from '../../../request/index.js'

const app = getApp();


Page({

    /**
     * 页面的初始数据
     */
    data: {
        userRole: '',
        roleInfo: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

        this.setData({
            userRole: app.globalData.userRole,
            roleInfo: {
                ...wx.getStorageSync('roleInfo')
            }

        })
        // console.log("infojiazai ")
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        // console.log("当前roleId",app.globalData.userRole)
    },
    onUnload: function () {

        // wx.switchTab({
        //     url: 'pages/info/info',
        // })
    }
})