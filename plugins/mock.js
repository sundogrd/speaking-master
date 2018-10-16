const Mock = require('mockjs');
// Mock.setup({
//     timeout: 400
// })
const Random = Mock.Random;
Random.name();
Random.url();
Random.title();
Random.paragraph();
Random.id();
Random.date();


Mock.mock(/user\.json/, 'get', {
  'list|1-10': [{
    'id|+1': 1,
    'email': '@EMAIL'
  }]
})
