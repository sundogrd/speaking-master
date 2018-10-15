function shuffle(arr, length) {
  var myarr = [];
  for (var i = 0; i < length; i++) {
    var idx = Math.floor(Math.random() * arr.length)
    myarr.push(arr[idx])
    arr.splice(idx, 1)
  }
  return myarr;
}

const mockMap = {
  "topics": {
    'topics|4-10': [{
      id: '@id',
      recommend: "@name",
      imgUrl: "http://p1.pstatp.com/list/640x360/d27f0005bc717ef8950f",
      'tags': () => shuffle(["tecnology", "science", 'cartoon'], 2),
      title: "@title",
      content: "@paragraph",
      time: '@date',
      'listenNum|1-300': 300,
      'videoNum|1-200': 200,
      'like|1-400': 200
    }]
  },
  "topic": {
    'topic': {
      id: '@id',
      recommend: "@name",
      imgUrl: "@url",
      'tags|1-3': ["tecnology", "science", 'jcartoon'],
      title: "@title",
      content: "@paragraph",
      time: '@date',
      'listenNum|1-300': 300,
      'videoNum|1-200': 200,
      'like|1-400': 200
    }

  }
}
module.exports = mockMap;
