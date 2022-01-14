import { getRequest, postRequest } from '../../../../request/index.js'

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        patientInfo: {  type: Object },
        patientRules: { type: Object }
    },
    /**
     * 组件的初始数据
     */
    data: {

    },
    /**
     * 组件的方法列表
     */
    methods: {
        formInputChange (e) {
            const { field } = e.currentTarget.dataset
            this.setData({
                [`patientInfo.${field}`]: e.detail.value
            })
        },

        submitForm () {
            this.selectComponent('.form').validate((valid, errors) => {
                if (!valid) {
                    const firstError = Object.keys(errors)
                    if (firstError.length) {
                        this.setData({
                            errorMsg: errors[firstError[0]].message
                        })
                    }
                } else {
                        postRequest('/patient/update', this.data.patientInfo)
                            .then(res => {
                                wx.setStorageSync('roleInfo', res.data.data.patient);
    
                                wx.navigateTo({
                                    url: '/pages/info/myInfo/myInfo',
                                });
                            })
                }
            })
        }
    }
})
