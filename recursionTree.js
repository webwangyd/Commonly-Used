let  data2 = [
  {
      title: 'parent 1',
      expand: true,
      selected:false,
      id:0,
      children: [
          {
              title: 'parent 1-1',
              id:1,
              expand: true,
              selected:false,
              children: [
                  {
                      title: 'leaf 1-1-1',
                      id:2,
                      selected:false,
                  },
                  {
                      title: 'leaf 1-1-2',
                      id:3,
                      selected:false,
                  }
              ]
          },
          {
              title: 'parent 1-2',
              expand: true,
              selected:false,
              children: [
                  {
                      title: 'leaf 1-2-1',
                      id:4,
                      selected:false,
                  },
                  {
                      title: 'leaf 1-2-1',
                      id:5,
                      selected:false,
                  }
              ]
          }
      ]
  },
];
function findIndexArray ( data, id, indexArray,idArray) {
  let arr = Array.from(indexArray)
  let ids = Array.from(idArray)
  for (let i = 0, len = data.length; i < len; i++) {
    arr.push(data[i].title)
    ids.push(data[i].id)
    data[i].selected = true
    if (data[i].id === id) {
      return {arr, ids}
    }
    let children = data[i].children
    if (children && children.length) {
      let result = findIndexArray(children, id, arr, ids)
      if (result) return result
    }
    arr.pop()
    ids.pop()
    data[i].selected = false
  }
  return false
}
console.log(findIndexArray(data2, 3, [], []))
console.log(JSON.stringify(data2))