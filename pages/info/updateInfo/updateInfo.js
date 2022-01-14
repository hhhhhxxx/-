// pages/info/updateInfo/updateInfo.js
import { getRequest, postRequest } from '../../../request/index.js'

const app = getApp();

Page({
    /**
     * 页面的初始数据
     */
    data: {
        userRole: '',
        roleInfo: {},
        errorMsg: '', // 验证表单显示错误信息
        patientRules: [
            {
                name: 'name',
                rules: { required: true, message: '请填写姓名' }
            },
            {
                name: 'age',
                rules: { required: true, message: '请填写年龄' }
            },
            {
                name: 'sex',
                rules: { required: true, message: '请填写性别' }
            },
            {
                name: 'phone',
                rules: { required: true, message: '请填写手机号' }
            },
            {
                name: 'address',
                rules: { required: true, message: '请填写住址' }
            },
            {
                name: 'history',
                rules: { required: true, message: '请填写病史' }
            },
            {
                name: 'allergy',
                rules: { required: true, message: '请填写过敏史' }
            }
        ],
        doctorRules: [
            {
                name: 'name',
                rules: { required: true, message: '请填写姓名' }
            },
            {
                name: 'age',
                rules: { required: true, message: '请填写年龄' }
            },
            {
                name: 'sex',
                rules: { required: true, message: '请填写性别' }
            },
            {
                name: 'phone',
                rules: { required: true, message: '请填写手机号' }
            },
            {
                name: 'room',
                rules: { required: true, message: '请填写科室' }
            },
            {
                name: 'jobYear',
                rules: { required: true, message: '请填写医龄' }
            },
            {
                name: 'position',
                rules: { required: true, message: '请填写职位' }
            },
            {
                name: 'hospital',
                rules: { required: true, message: '请填写过敏史' }
            }
        ]
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            userRole: app.globalData.userRole,
            roleInfo: {
                ...wx.getStorageSync("roleInfo")
            }
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