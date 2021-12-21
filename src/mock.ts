import Mock from 'mockjs'
function newData () {
  const arr = []
  for (let i = 0; i < 10; i++) {
    arr.push({
      id: Mock.mock('@id'),
      'name': Mock.mock('@cname'),
      'title': i < 5 ? Mock.Random.title(3, 5) : Mock.Random.ctitle(),
      'date': Mock.mock('@date'),
      city: Mock.mock('@city'),
      mobile: Mock.mock('@integer(400000000, 40000000022)')
    })
  }
  return arr
}
Mock.mock('/api/home', {
  'code': 0,
  'message': Mock.Random.ctitle(),
  'data': newData()
})