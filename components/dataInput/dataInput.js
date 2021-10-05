// components/dataInput/dataInput.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        valueCName: '',
        valueName: ''
    },

    /**
     * 组件的初始数据
     */
    data: {
        form: {
            time: '',
            value: '',
        },
        errorMsg: '', // 验证表单显示错误信息
        rules: [
            {
                name: 'time',
                rules: { required: true, message: '请填写时间' }
            },
            {
                name: 'heartRate',
                rules: { required: true, message: '请填写测量值' },
            }
        ],
    },

    /**
     * 组件的方法列表
     */
    methods: {
        formInputChange(e) {
            const {field} = e.currentTarget.dataset
            this.setData({
              [`form.${field}`]: e.detail.value
            })
          },
        
          submitForm() {
            const {time, value} = this.data.form
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
          }
    }
})
