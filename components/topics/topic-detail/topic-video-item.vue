<template>
    <sm-card>
        <div class="topic-video-item">
            <div class="topic-video-item__header">
                <div class="topic-video-item__header-owner">
                    <img src="http://p1.pstatp.com/list/640x360/d27f0005bc717ef8950f" alt="pic">
                    <span class="topic-video-item__header-owner-info">
                        <span>咸鱼飞</span>
                        <span>19小时前 学生</span>
                    </span>
                </div>
                <button>关注</button>
            </div>
            <div class="topic-video-item__body">
                <div>这里是video</div>
            </div>
            <div class="topic-video-item__footer">
                <span class="topic-video-item__footer--item">
                    <icon-svg icon-class="star"></icon-svg>
                    <span>{{data.starNum}}</span>
                </span>
                <span class="topic-video-item__footer--item">
                    <nuxt-link :to="`/topics/23/comments`">
                        <icon-svg icon-class="comments"></icon-svg>
                        <span>{{data.commentsNum}}</span>
                    </nuxt-link>
                </span>
                <span class="topic-video-item__footer--item">
                    <icon-svg icon-class="download"></icon-svg>
                    <span>{{data.downloadNum}}</span>
                </span>
                <span class="topic-video-item__footer--item">
                    <icon-svg icon-class="listen"></icon-svg>
                    <span>{{data.listenNum}}</span>
                </span>
            </div>
        </div>
    </sm-card>
</template>
<script>
import SmCard from "~/components/common/sm-card";
export default {
  name: "TopicVideoItem",
  componentName: "TopicVideoItem",
  components: {
    SmCard
  },
  props: {
    video: Object
  },
  data() {
    return {
      data: {
        starNum: 55,
        commentsNum: 456,
        downloadNum: 44,
        listenNum: 233
      }
    };
  },
  computed: {}
};
</script>
<style lang="less" scoped>
.topic-video-item {
  padding: @cardPadding;
  .topic-video-item__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .topic-video-item__header-owner {
      display: flex;

      img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
      }
      .topic-video-item__header-owner-info {
        margin-left: 6px;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: space-between;

        span:nth-child(1) {
          font-size: 12px;
          color: @fontBlack;
        }

        span:nth-child(2) {
          font-size: 10px;
          color: @fontGray;
        }
      }
    }

    button {
      color: white;
      background-color: @blue;
      .inline-block(24px);
      border-radius: 4px;
    }
  }

  .topic-video-item__body {
    .center();
    height: 50px;
    width: 100%;
    margin: 8px 0px 2px;
    background: @blue;
  }

  .topic-video-item__footer {
    margin: 10px 0px 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .topic-video-item__footer--item {
      //   display: flex;
      //   align-items: center;
      //   justify-content: space-between;
      .center();
      span {
        margin-left: 3px;
        font-size: 12px;
      }
      svg {
        font-size: 18px;
      }
    }
  }
}
</style>
