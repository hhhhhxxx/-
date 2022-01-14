// pages/manage/info/info.js
import { getRequest, postRequest } from '../../../request/index.js'

const app = getApp();


Page({
  /**
   * 页面的初始数据
   */
  data: {
    doctorInfo: '',
    patientId: '',
    isConnect: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
        userRole: app.globalData.userRole,
    })

    let {id} = wx.getStorageSync('roleInfo')


    if(this.data.userRole == 2) {
        var patientInfo = JSON.parse(options.patientInfo)
        this.setData({
            patientInfo: patientInfo,
            doctorId: id
        })

        // console.log(patientInfo)
    } else if(this.data.userRole == 1) {
        var doctorInfo = JSON.parse(options.doctorInfo)
        this.setData({
            doctorInfo: doctorInfo,
            patientId: id
        })

        var that = this
        getRequest('/connect/judgeIsConnect',{
            doctorId: that.data.doctorInfo.id,
            patientId: that.data.patientId,
        }).then(res => {
            if(res.data.code == 1) {
                that.setData({
                    isConnect: true
                })
            }
        }).catch(res => {
            if(res.data.code == 0) {
                that.setData({
                    isConnect: false
                })
            }
        })
    }
  },

  apply() {
    var that = this

    getRequest('/connect/apply',{
        doctorId: that.data.doctorInfo.id,
        patientId: that.data.patientId,
    }).then(res=>{
        wx.showToast({
            title: '申请成功',
        })
    })
  },
  cancel() {
    var that = this
    getRequest('/connect/cancel',{
        doctorId: that.data.doctorInfo.id,
        patientId: that.data.patientId,
    }).then(res=>{
        wx.showToast({
            title: '取消成功',
        })
        that.setData({
           isConnect: false 
        })
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