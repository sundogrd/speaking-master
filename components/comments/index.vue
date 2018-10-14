<template>
  <sm-card>
    <div class="comment">
      <img src="http://p1.pstatp.com/list/640x360/d27f0005bc717ef8950f" alt="pic">
      <div class="comment__content">
        <div class="comment__content-header">
          <div class="comment__content-header--owner">
            <span>咸鱼飞</span>
            <span>10/8/2018 17:00</span>
          </div>
        </div>
        <div class="comment__content-body">
          <p>评论中间测试中间测试评论中间测试中间测试评论中间测试中间测试评论中间测试中间测试评论中间测试中间测试评论中间测试中间测试</p>
        </div>
        <div class="comment__content-footer">
          <span class="comment__content-footer--item">
            <icon-svg icon-class="star"></icon-svg>
            <span>{{comment.like}}</span>
          </span>
          <span class="comment__content-footer--item">
            <icon-svg icon-class="dump"></icon-svg>
            <span>{{comment.unlike}}</span>
          </span>
        </div>
      </div>
    </div>
  </sm-card>
</template>
<script>
import SmCard from "~/components/common/sm-card";
export default {
  name: "Comment",
  componentName: "Comment",
  components: {
    SmCard
  },
  props: {
    comment: {
      requiered: true,
      type: Object
    }
  },
  data() {
    return {
      data: {}
    };
  },
  computed: {}
};
</script>
<style lang="less" scoped>
.comment {
  display: flex;
  padding: @cardPadding;
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
  .comment__content {
    display: flex;
    .center();
    flex-direction: column;
    align-items: flex-start;
    .comment__content-header {
      .comment__content-header--owner {
        margin-left: 4px;
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
    .comment__content-body {
      color: @fontBlack;
      font-size: 14px;
      padding: 4px 4px 8px 4px;
      .word();
    }
    .comment__content-footer {
      align-self: flex-end;
      margin-right: 4px;
      .comment__content-footer--item {
        span {
          margin-left: 3px;
          font-size: 12px;
          color: @fontGray;
        }
        svg {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
