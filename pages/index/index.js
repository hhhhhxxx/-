// index.js
import { patientTabBar, doctorTabBar } from '../../utils/tabBarUrl'
// 获取应用实例
const app = getApp()

Page({
  data: {
    form: {
        userName: '',
        password: '',
      },
      errorMsg: '', // 验证表单显示错误信息
      rules: [
        {
          name: 'userName',
          rules: [{required: true, message: '请填写用户名'},{minlength:3,message: '太短'}]
        },
        {
          name: 'password',
          rules: {required: true, message: '请填写密码'},
        }
      ],
  },

  formInputChange(e) {
    const {field} = e.currentTarget.dataset
    this.setData({
      [`form.${field}`]: e.detail.value
    })
  },

  submitForm() {
    const {userName, password} = this.data.form
    this.selectComponent('#form').validate((valid, errors) => {
        if (!valid) {
            const firstError = Object.keys(errors)
            if (firstError.length) {
                this.setData({
                    errorMsg: errors[firstError[0]].message
                })
            }
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

  changePatient () {
    app.globalData.tabBarList =  patientTabBar
    app.globalData.userRole =  "patient"
    wx.switchTab({
      url: '/pages/data/data',
    })
  },
  // 商户
  changeDoctor () {
    app.globalData.tabBarList =  doctorTabBar
    app.globalData.userRole =  "doctor"
    wx.switchTab({
      url: '/pages/manage/manage',
    })
  },
  onload: function() {
  }
})
