/**
 * 获得 url 中参数值
 * @param  {string} key [query 中参数 key]
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
  return paramsObj[key]
}

export const downloadFile = (blob, filename = '下载文件') => {
  // ie
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
