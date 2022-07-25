/**
 * 定义发送请求通用方法
 */
import axios from 'axios'

export default function ajax(url, data = {}, method = 'GET') {
  if (method === 'GET') {
    let paramStr = ''
    Object.keys(data).forEach(key => {
      paramStr += key + '=' + data[key] + '&'
    })
    if (paramStr) {
      // substring(i, j)，区间为[i, j)
      paramStr = paramStr.substring(0, paramStr.length - 1)
    }
    return axios.get(url + '?' + paramStr)
  } else {
    return axios.post(url, data)
  }
}
