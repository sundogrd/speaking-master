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
// Mock.mock(/user\.json/, {
//     'list|1-10': [{
//       'id|+1': 1,
//       'email': '@EMAIL'
//     }]
//   })

const mockMap = {
    "\/topics": {
        'topics|1-5': [
            {
                id: '@id',
                recommend: "@name",
                imgUrl: "@url",
                'tags|1-3': ["tecnology", "science", 'jcartoon'],
                title: "@title",
                content: "@paragraph",
                time: '@date',
                'listenNum | 1-300': 300,
                'videoNum | 1-200': 200,
                'like|1-400': 200
            }
        ] 
    },
    "\/topics\/\d+": {
        'topic': [
            {
                id: '@id',
                recommend: "@name",
                imgUrl: "@url",
                'tags|1-3': ["tecnology", "science", 'jcartoon'],
                title: "@title",
                content: "@paragraph",
                time: '@date',
                'listenNum | 1-300': 300,
                'videoNum | 1-200': 200,
                'like|1-400': 200
            }
        ]
    }
}

const prefix = "localhost:3091\/api"

Object.keys(mockMap).forEach(url => {
    const match = new RegExp(prefix+url);
    Mock.mock(match, mockMap[url])
})

// mock topic detail
// mocK topic comment