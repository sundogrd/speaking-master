<template>
  <div class="topic-footer">
    <div class="topic-footer--time">
      <span>{{time}}</span>
    </div>
    <div class="topic-footer--details">
      <icon-svg icon-class="video"></icon-svg>
      <span>{{videoNum}}</span>
      <icon-svg icon-class="watch"></icon-svg>
      <span>{{listenNum}}</span>
      <icon-svg icon-class="collection"></icon-svg>
      <span>{{like}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TopicFooter",
  componentName: "TopicFooter",
  components: {},
  props: {
    time: [String, Number],
    videoNum: [String, Number],
    listenNum: [String, Number],
    like: [String, Number]
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.topic-footer {
  margin: 6px 0 4px;
  display: flex;
  justify-content: space-between;
  .topic-footer--time {
    font-size: 10px;
    color: #b5b5b5;
  }
  .topic-footer--details span {
    font-size: 10px;
    color: #b5b5b5;
  }
}
</style>

