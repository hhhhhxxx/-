import { getRequest, postRequest } from '../../request/index.js'

const app = getApp();


Page({

    /**
     * 页面的初始数据
     */
    data: {
        userRole: '',
        id: ''
    },  

    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        
        let {id} = wx.getStorageSync('roleInfo')

        this.setData({
            userRole: app.globalData.userRole,
            id: id
        })
        // console.log('登录角色',this.data.userRole)
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        // console.log('ready')
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        // console.log('show')
        this.setData({
            userRole: app.globalData.userRole,
        })

        if (typeof this.getTabBar === 'function' && 
            this.getTabBar()) {
                this.getTabBar().setData({
                    selected: 2,
                    list: app.globalData.tabBarList
                })
        }
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})