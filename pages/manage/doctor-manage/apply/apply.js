import { getRequest, postRequest } from '../../../../request/index.js'

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let {id} = wx.getStorageSync('roleInfo')

    this.setData({
        userRole: app.globalData.userRole,
        doctorId: id
    })
    this.getApplyList()
  },

  getApplyList() {
    const that = this 
    getRequest('/connect/getDoctorApplyPatient',{
        doctorId: that.data.doctorId
    }).then(res=>{
        that.setData({
            myPatientList: res.data.data.myPatientList
        })
    })
  },

  agree(e) {

    const that = this
    getRequest('/connect/agree',{
        doctorId: this.data.doctorId,
        patientId: e.currentTarget.dataset.pid
    }).then(res => {
        that.getApplyList()
    })
  },

  reject(e) {
    const that = this
    getRequest('/connect/reject',{
        doctorId: this.data.doctorId,
        patientId: e.currentTarget.dataset.pid
    }).then(res => {
        that.getApplyList()
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