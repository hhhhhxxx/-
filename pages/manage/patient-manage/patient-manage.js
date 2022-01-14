import { getRequest, postRequest } from '../../../request/index.js'

Component({
    data: {
        myDoctorList: [],
        isShowMyDoctor: true
    },
    properties: {
        patientId: ''
    },
    lifetimes: {

        attached: function () {
            // 在组件实例进入页面节点树时执行
            this.setData({
                search: this.search.bind(this)
            })

            this.getMyDoctorList()
        },

    },
    pageLifetimes: {
        show: function () {
            this.getMyDoctorList()
        }
    },

    methods: {

        getMyDoctorList () {
            const that = this
            getRequest('/connect/getPatientMyDocotr', {
                patientId: this.data.patientId
            }).then(res => {
                that.setData({
                    myDoctorList: res.data.data.myDoctorList
                })
            })
        },

        toDoctorInfo (e) {
            let doctorInfo = e.currentTarget.dataset.item || ''
            // console.log( doctorInfo)
            wx.navigateTo({
                url: `/pages/manage/info/info?doctorInfo=${JSON.stringify(doctorInfo)}`
            });
        },
        // 搜索功能
        search: function (value) {
            return new Promise((resolve, reject) => {

                getRequest('/doctor/getByName', {
                    name: value
                }).then(res => {
                    let list = res.data.data.doctorList
                    let packing = []

                    list.forEach(element => {
                        packing.push({
                            text: element.name + " " + element.room,
                            element
                        })
                    });

                    resolve(packing)
                    console.log(packing)
                })

                // resolve([{ text: '搜索结果', value: 1 }, { text: '搜索结果2', value: 2 }])

            })
        },
        selectResult: function (e) {
            console.log('select result', e.detail)

            wx.navigateTo({
                url: `/pages/manage/info/info?doctorInfo=${JSON.stringify(e.detail.item.element)}`
            });
        },

        focus: function () {
            this.setData({
                isShowMyDoctor: false
            })

        },
        clear: function () {
            console.log("有没有")
        },

        /** searchBar 部分 */
        reSetSearchbarCancel () {
            let sbar = this.selectComponent(".searchBar"), { hideInput } = sbar;
            // 重写
            Object.defineProperties(sbar.__proto__, {
                hideInput: {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    value (...p) {
                        // 加上这句，同时wxml需要加上bindcancel="cancel"
                        this.triggerEvent('cancel', {})
                        // 或者这里直接调用下面的cancel方法，那么wxml就不需要bindcancel
                        // t.cancel()
                        // 执行原方法，返回原方法结果
                        return hideInput.apply(sbar, p)
                    }
                }
            })
        },
        cancel () {
            // 执行你的操作
            this.setData({
                isShowMyDoctor: true
            })
        }
    }
})