const ROOT_PARENT_ID = 'ROOT_PARENT_ID'
/**
 * 列表数据构造嵌套数据
 * @param  {Array}  list                      列表数据
 * @param  {String} [selfKey = 'id']          节点字段名称
 * @param  {String} [parentKey = 'parentId']  父级节点字段名称
 * @return {Object}                           嵌套数据类型
 */
export default (list, selfKey = 'id', parentKey = 'parentId') => {
  if (!Array.isArray(list) || !list.length) {
    console.log('list2tree: first param must be array.')
    return []
  }

  const objList = {}
  const sameParentObj = {}
  list.forEach(item => {
    const parentId = item[parentKey] || ROOT_PARENT_ID
    if (!sameParentObj[parentId]) {
      sameParentObj[parentId] = []
    }
    sameParentObj[parentId].push(item)
    objList[item[selfKey]] = item
  })

  let treeData = []
  // 找出根节点
  Object.keys(sameParentObj).forEach(key => {
    if (!objList[key]) {
      treeData = treeData.concat(sameParentObj[key])
    }
  })

  const addChildren = items => {
    items.forEach(item => {
      const itemId = item[selfKey]
      if (sameParentObj[itemId]) {
        item['children'] = sameParentObj[itemId]
        addChildren(item['children'])
      }
    })
  }
  addChildren(treeData)

  return treeData
}
