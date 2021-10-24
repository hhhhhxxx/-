// pages/manage/manage.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        inputShowed: false,
        inputVal: ""
    },  

    search: function (value) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([{text: '医生1', value: 1}, {text: '医生2', value: 2}])
            }, 200)
        })
    },
    selectResult: function (e) {
        console.log('select result', e.detail)
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            search: this.search.bind(this)
        })
        
        const app = getApp();
        this.setData({
            userRole:  app.globalData.userRole
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {

            const app = getApp();
            if (app.globalData.userRole == "patient") {
                this.getTabBar().setData({
                    selected: 2,
                    list: app.globalData.tabBarList
                })
            } else if (app.globalData.userRole == "doctor") {
                this.getTabBar().setData({
                    selected: 0,
                    list: app.globalData.tabBarList
                })
            }
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