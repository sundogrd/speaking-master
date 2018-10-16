<template>
  <div class="topic-footer">
    <div class="topic-footer--time">
      <span>{{time}}</span>
    </div>
    <div class="topic-footer--details">
      <span class="topic-footer--detail">
        <icon-svg icon-class="video"></icon-svg>
        <span>{{videoNum}}</span>
      </span>
      <span class="topic-footer--detail">
        <icon-svg icon-class="watch"></icon-svg>
        <span>{{listenNum}}</span>
      </span>
      <span class="topic-footer--detail">
        <icon-svg icon-class="collection"></icon-svg>
        <span>{{like}}</span>
      </span>
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
    color: @fontGray;
  }

  .topic-footer--details {
    .center();
    .topic-footer--detail {
      .center();
      margin-left: 12px;
      span {
        font-size: 10px;
        color: @fontGray;
      }

      svg {
        margin-right: 3px;
        font-size: 16px;
      }
    }
  }
}
</style>
