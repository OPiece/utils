/**
 * 获得 url 中参数值
 * @param  {string} key           [query 中参数 key]
 * @param  {string} url           [不传则获取当前 location.href]
 * @return {[string|object]}      [query 中参数值, 不传则返回全部参数的对象]
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
      try {
        paramsObj[arr[0]] = window.decodeURIComponent(arr[1])
      } catch (e) {
        paramsObj[arr[0]] = arr[1]
        console.error('opiece-utils decodeURIComponent error:', e)
      }
    })
  }

  return key ? paramsObj[key] : paramsObj
}

/**
 * [downloadFile description]
 * @param  {[blob]} blob                   [description]
 * @param  {String} [filename='下载文件']   [description]
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

    const evt = document.createEvent('MouseEvents')
    evt.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    a.dispatchEvent(evt)
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
