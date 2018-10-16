const datas = require('./requireAll')(require('path').resolve(__dirname, 'data'));
const Mock = require('mockjs');

const Random = Mock.Random;
Random.name();
Random.url();
Random.title();
Random.paragraph();
Random.id();
Random.date();
module.exports = () => {
  let db = {};
  // 每个文件处理
  Object.values(datas).forEach(routes => {
    // 每个文件路由处理
    Object.keys(routes).forEach(url => {
      let data = Object.values(Mock.mock(routes[url]))[0];
      db[url] = data;
    })
  })
  return db;
}
