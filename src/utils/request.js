import axios from 'axios'
import { Message, Notification } from 'element-ui'
import store from '@/store'

// create an axios instance
const service = axios.create({
	baseURL: process.env.VUE_APP_BASE_API,
	timeout: 100000
})

// request interceptor
service.interceptors.request.use(
	async config => {
		// config.headers['Authorization'] = getToken()

		return config
	},
	error => {
		// Do something with request error
		console.log('request interceptor')
		console.log(error) // for debug
		return Promise.reject(error)
	}
)

// response interceptor
service.interceptors.response.use(
	/**
	 * If you want to get http information such as headers or status
	 * Please return  response => response
	 *
	 * Determine the request status by custom code
	 * Here is just an example
	 * You can also judge the status by HTTP Status Code
	 */
	async response => {
        // Download file
        if (response.headers.pragma != undefined || response.headers.pragma != null) {
            return response
        }
        else {
            const res = response.data

            // if the custom code is not 20000, it is judged as an error.
            if (!res) {
                Message({
                    message: 'Error',
                    type: 'error',
                    duration: 5 * 1000
                })

                return Promise.reject(new Error(res.message || 'Error'))
            }
            else {
                return res
            }
        }
	},
	async function(error) {
        var response = JSON.parse(JSON.stringify(error))
        console.log('err' + error) // for debug

		return Promise.reject(new Error(error.message || 'Error'))
	}
)

export default service
