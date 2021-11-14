// index.js
import { patientTabBar, doctorTabBar } from '../../utils/tabBarUrl'

import { getRequest, postRequest } from '../../request/index.js'
// 获取应用实例
const app = getApp()

Page({
    data: {
        form: {
            username: 'hhhhhx',
            password: '123123',
        },
        errorMsg: '', // 验证表单显示错误信息
        rules: [
            {
                name: 'username',
                rules: [{ required: true, message: '请填写用户名' }, { minlength: 3, message: '太短' }]
            },
            {
                name: 'password',
                rules: { required: true, message: '请填写密码' },
            }
        ],
    },

    formInputChange (e) {
        const { field } = e.currentTarget.dataset
        this.setData({
            [`form.${field}`]: e.detail.value
        })
    },

    submitForm () {
        const { username, password } = this.data.form
        this.selectComponent('#form').validate((valid, errors) => {
            if (!valid) {
                const firstError = Object.keys(errors)
                if (firstError.length) {
                    this.setData({
                        errorMsg: errors[firstError[0]].message
                    })
                }
            } else {
                // 清除历史的sessionId
                wx.removeStorageSync('sessionId')
                wx.removeStorageSync('user')
                wx.removeStorageSync('roleInfo')
                // 登录请求
                postRequest('/login',{
                        username: username,
                        password: password
                    }).then(res => {
                        
                        wx.setStorageSync("sessionId", res.data.data.sessionId);
                        wx.setStorageSync("user", res.data.data.user);
                        wx.setStorageSync("roleInfo", res.data.data.roleInfo);

                        wx.showToast({
                            title: '登录',
                        })

                        if(res.data.data.user.roleId == "1") {
                            this.changePatient();
                        } else if(res.data.data.user.roleId == "2") {
                            this.changeDoctor();
                        }

                    }).catch(res => {
                        console.log(res)
                        wx.showToast({
                            title: '请求出错'
                        })
                    })
            }
        })
    },

    changePatient () {
        app.globalData.tabBarList = patientTabBar
        app.globalData.userRole = "patient"
        wx.switchTab({
            url: '/pages/data/data',
        })
    },
    // 商户
    changeDoctor () {
        app.globalData.tabBarList = doctorTabBar
        app.globalData.userRole = "doctor"
        wx.switchTab({
            url: '/pages/manage/manage',
        })
    },

    onload: function () {

    },
    onReady: function () {
        // wx.removeStorageSync('sessionId')
        // wx.removeStorageSync('user')
        // console.log(1223)
    },
})
