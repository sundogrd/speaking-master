<template>
  <div class="topic-text-picture-feed">
    <div class="main">
      <sm-row>
        <sm-col span="16">
          <h2>What's your favourite language</h2>
          <p>Javascript is awesome</p>
        </sm-col>
        <sm-col span="8"><img src="undefined" /></sm-col>
      </sm-row>
    </div>
    <footer>
      <div class="feed-user">
        <img src="//avatars1.githubusercontent.com/u/9214496?s=460&v=4" />
        <span>梁王</span>
      </div>
      <div class="feed-tags">
        <sm-tag type="info"></sm-tag>
      </div>
    </footer>
  </div>
</template>

<script>
import SmTag from '../../common/sm-tag'
export default {
  components: {
    SmTag,
  }
}
</script>

<style lang="less">
.topic-text-picture-feed {
  .main {
    h2 {
      margin-bottom: 9px;

      font-size: 16px;
      color: #101010;
    }
    p {
      margin-bottom: 26px;

      font-size: 14px;
      color: #8C8C8C;
    }
  }
  footer {
    .feed-user {
      img {
        border-radius: 50%;
        width: 20px;
        height: 20px;
      }
      span {
        font-size: 12px;
        color: #8C8C8C;
      }
    }
    .feed-tags {

    }
  }
}
</style>
