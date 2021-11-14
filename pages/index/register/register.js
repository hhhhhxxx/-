// pages/index/register/register.js
import { getRequest, postRequest } from '../../../request/index.js'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //   false为患者 true为医生
        show: false,
        patientForm: {
            username: '',
            password: '',
            roleId: 1,
            name: '',
            age: '',
            sex: '',
            phone: '',
            address: '',
            history: '',
            allergy: '',
        },
        doctorForm: {
            username: '',
            password: '',
            roleId: 2,
            name: '',
            age: '',
            sex: '',
            phone: '',
            room: '',
            jobYear: '',
            position: '',
            hospital: ''
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

    clearForm () {
        if (this.data.show == false) {
            this.setData({
                patientForm: {
                    username: '',
                    password: '',
                    roleId: 1,
                    name: '',
                    age: '',
                    sex: '',
                    phone: '',
                    address: '',
                    history: '',
                    allergy: '',
                }
            })
        } else {
            this.setData({
                doctorForm: {
                    username: '',
                    password: '',
                    roleId: 2,
                    name: '',
                    age: '',
                    sex: '',
                    phone: '',
                    room: '',
                    jobYear: '',
                    position: '',
                    hospital: ''
                }
            })
        }
    },

    changeSwitch (e) {

        if (this.data.show == true) {
            this.setData({
                // 变成患者
                show: !this.data.show,
            })
        } else {
            this.setData({
                // 变成医生
                show: !this.data.show,

            })
        }
    },

    changeRole(e) {
        const { role } = e.currentTarget.dataset
        if(role == 1) {
            this.setData({
                // 变成患者
                show: false,
            })
        } else {
            this.setData({
                // 变成医生
                show: true,

            })
        }
    },

    formInputChange (e) {
        let formName = this.data.show == false ? 'patientForm' : 'doctorForm'
        const { field } = e.currentTarget.dataset
        this.setData({
            [`${formName}.${field}`]: e.detail.value
        })
    },
    submitForm () {
        let formName = this.data.show == false ? 'patientForm' : 'doctorForm'
        this.selectComponent(`#${formName}`).validate((valid, errors) => {
            if (!valid) {
                const firstError = Object.keys(errors)
                if (firstError.length) {
                    this.setData({
                        errorMsg: errors[firstError[0]].message
                    })
                }
            } else {
                // console.log(this.data.roleForm);
                if (this.data.show == false) {
                    console.log(this.data.patientForm);
                    postRequest('/register/patient', this.data.patientForm)
                        .then(res => {
                            wx.setStorageSync('roleInfo', res.data.data.patient);

                            wx.showToast({
                                title: '注册成功'
                            })
                            wx.redirectTo({
                                url: '/pages/index/index',
                            });
                        }).catch(res => {
                            wx.redirectTo({
                                url: '/pages/index/index',
                            });
                        })
                } else {
                    console.log(this.data.doctorForm)
                    postRequest('/register/doctor', this.data.doctorForm)
                        .then(res => {
                            wx.setStorageSync('roleInfo', res.data.data.doctor);
                            wx.showToast({
                                title: '注册成功'
                            })
                            wx.redirectTo({
                                url: '/pages/index/index',
                            });
                        }).catch(res => {
                            wx.redirectTo({
                                url: '/pages/index/index',
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
            roleForm: this.data.patientForm
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