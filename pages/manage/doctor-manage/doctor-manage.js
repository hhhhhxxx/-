import { getRequest, postRequest } from '../../../request/index.js'

Component({
    data: {
        myPatientList: [],

    },
    properties: {
        doctorId: ''
    },
    
    pageLifetimes: {
        show: function () {
            this.getMyPatientList()
        }
    },

    methods: {
        getMyPatientList () {
            const that = this
            getRequest('/connect/getDoctorMyPatient', {
                doctorId: that.data.doctorId
            }).then(res => {
                that.setData({
                    myPatientList: res.data.data.myPatientList
                })
            })
        },

        toPatientInfo (e) {
            let patientInfo = e.currentTarget.dataset.item || '';
            // console.log( doctorInfo)
            wx.navigateTo({
                url: `/pages/manage/info/info?patientInfo=${JSON.stringify(patientInfo)}`
            });
            // url="/pages/manage/info/info?doctorInfo={{JSON.stringify(item)}}"
        }
    }
})