/**
 * 获得 url 中参数值
 * @param  {string} key [query 中参数 key, 不传则返回全部参数的对象]
 * @param  {string} url [不传则获取当前 location.href]
 * @return [string]     [query 中参数 value]
 */
export const getUrlParam = (key, url) => {
  if (!url) {
    url = window.location.href
  }
  const paramsArr = url.match(/[^?#&]+=[^?#&]+/g)
  const paramsObj = {}
  if (paramsArr) {
    paramsArr.forEach(item => {
      const arr = item.split('=')
      paramsObj[arr[0]] = arr[1]
    })
  }
  if (!key) {
    return paramsObj
  }
  return paramsObj[key]
}

/**
 * [downloadFile description]
 * @param  {[blob]} blob              [description]
 * @param  {String} [filename='下载文件'] [description]
 * @return {[type]}                   [description]
 */
export const downloadFile = (blob, filename = '下载文件') => {
  //  ie
  if (navigator.msSaveBlob) {
    navigator.msSaveBlob(blob, filename)
  } else {
    const a = document.createElement('a')
    const url = window.URL.createObjectURL(blob)
    a.href = url
    a.download = filename
    a.click()
    window.URL.revokeObjectURL(url)
  }
}

/**
 * 获得浏览器类型和版本
 * @return [object]
 */
export const browser = type => {
  const ua = navigator.userAgent.toLowerCase()
  return {
    ie: (ua.match(/msie ([\d.]+)/) || [])[1],
    safari: (ua.match(/version\/([\d.]+).*safari/) || [])[1],
    chrome: (ua.match(/chrome\/([\d.]+)/) || [])[1],
    firefox: (ua.match(/firefox\/([\d.]+)/) || [])[1],
    opera: (ua.match(/opera.([\d.]+)/) || [])[1]
  }
}
