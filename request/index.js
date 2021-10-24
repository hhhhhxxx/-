// 公共url
const baseUrl = "http://localhost:8080"

export const request = (url, params, header, method = 'get') => {

    return new Promise((resolve, reject) => {
        //本地取存储的sessionId
        let sessionId = wx.getStorageSync('sessionId');
        //本地session存在,则放到header里
        if (sessionId != "" && sessionId != null) {
            header["token"] = sessionId;
        }
        wx.request({
            ...params,
            url: baseUrl + url,
            header: header,
            method: method,

            success: (res) => {
                if (res.data.code == "1") {
                    resolve(res)
                } else {
                    reject(res)
                }
            },
            fail: (err) => {
                reject(err)
            }
        });
    })
}

export const getRequest = (url, params) => {

    let header = {
        // get请求的type
        "Content-Type": "application/json",
        // sessionId
        "token": ""
    }
    return request(url, { data: params }, header, "get")
}


export const postRequest = (url, params) => {

    let header = {
        // post请求的type
        "Content-Type": "application/x-www-form-urlencoded",
        "token": ""
        // sessionId
    }
    return request(url, { data: params }, header, "post")
}