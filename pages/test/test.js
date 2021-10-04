// pages/test/test.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        form: {
            userName: '',
            telNumber: '',
            addrDetail: '',
            region: ['请选择省市区/县', '', ''], // 省市区数据 第一个可以当placeholder
        },
        errorMsg: '', // 验证表单显示错误信息
        customItem: '', // 自定义picker显示的内容
        rules: [
            {
                name: 'userName',
                rules: { required: true, message: '请填写收货人姓名' },
            },
            {
                name: 'telNumber',
                rules: [{ required: true, message: '请填写收货人电话' }, { mobile: true, message: '电话格式不对' }]
            },
            {
                name: 'addrDetail',
                rules: { required: true, message: '请填写详细地址' }
            },
        ],
    },
    externalClasses: ['form_item', 'form_item_region'],
    Postcode: '', // 邮编

    bindRegionChange (e) {
        const { value, code, postcode } = e.detail
        // console.log(code) // 统计用区划代码
        // postcode 是邮政编码
        this.Postcode = postcode
        this.setData({
            'form.region': value
        })
    },
    formInputChange (e) {
        const { field } = e.currentTarget.dataset
        this.setData({
            [`form.${field}`]: e.detail.value
        })
    },
    // weui提交表单
    weSubmitForm () {
        const { userName, telNumber, region, addrDetail } = this.data.form
        const validRegion = region.filter(v => v) // 提取有效值
        this.selectComponent('#form').validate((valid, errors) => {
            if (!valid) {
                const firstError = Object.keys(errors)
                if (firstError.length) {
                    this.setData({
                        errorMsg: errors[firstError[0]].message
                    })
                }
            } else if (validRegion.length < 2) {
                this.setData({
                    errorMsg: '请选择省市区'
                })
            } else {
                wx.showToast({
                    title: '提交成功',
                })
                wx.navigateBack({
                    delta: 1
                })
            }
        })
    },
    // 重置表单
    restForm () {
        this.setData({
            'form.userName': '',
            'form.telNumber': '',
            'form.addrDetail': '',
            'form.region': ['请选择省市区/县', '', '']
        })
        wx.navigateBack({
            delta: 1
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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