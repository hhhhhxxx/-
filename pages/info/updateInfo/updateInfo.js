// pages/info/updateInfo/updateInfo.js
import { getRequest, postRequest } from '../../../request/index.js'

const app = getApp();

Page({
    /**
     * 页面的初始数据
     */
    data: {
        userRole: '',
        roleForm: {

        },
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

    formInputChange (e) {
        const { field } = e.currentTarget.dataset
        this.setData({
            [`roleForm.${field}`]: e.detail.value
        })
    },

    submitForm () {

        this.selectComponent('#form').validate((valid, errors) => {
            if (!valid) {
                const firstError = Object.keys(errors)
                if (firstError.length) {
                    this.setData({
                        errorMsg: errors[firstError[0]].message
                    })
                }
            } else {

                if (this.data.userRole == 'patient') {

                    postRequest('/patient/update', this.data.roleForm)
                        .then(res => {
                            wx.setStorageSync('roleInfo', res.data.data.patient);

                            wx.navigateTo({
                                url: '/pages/info/myInfo/myInfo',
                            });
                        })
                } else if (this.data.userRole == 'doctor') {
                    postRequest('/doctor/update', this.data.roleForm)
                        .then(res => {
                            wx.setStorageSync('roleInfo', res.data.data.doctor);

                            // wx.navigateTo({
                            //     url: '/pages/info/myInfo/myInfo',
                            // });
                            wx.redirectTo({
                                url: '/pages/info/myInfo/myInfo',

                            });
                            // wx.navigateBack({
                            //     delta: 1//默认值是1，返回的页面数，如果 delta 大于现有页面数，则返回到首页。
                            // })
                        }).catch(res => {
                            wx.redirectTo({
                                url: '/pages/info/myInfo/myInfo',

                            });
                        })
                }
            }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            userRole: app.globalData.userRole,
            roleForm: {
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