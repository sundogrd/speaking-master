<template>
    <div class="comments">
        <header>
            <div class="comments-video">这里是video</div>
        </header>
        <section>
            <div class="comments-info">

            </div>
            <div class="comments-detail">
                <comment v-for="(comment, index) in comments" :key="index" :comment="comment"></comment>
            </div>
        </section>
    </div>
</template>
<script>
import Comment from "~/components/comments";

export default {
  //   validate({ params }) {
  //     console.log("topic id is: " + params.id);
  //     return /^\d+$/.test(+params.id);
  //   },
  components: {
    Comment
  },
  props: {
    //   comments: {
    //       required: true,
    //       type: Array
    //   }
  },
  layout: "sm",
  data() {
    return {
      comments: [
        {
          user: "luffy",
          content: "testesteffjdfjasofjwejfowjofj",
          time: "10/2/2018 17:00",
          like: 223,
          unlike: 32,
          avatarUrl: ""
        },
        {
          user: "luffy",
          content: "testesteffjdfjasofjwejfowjofj",
          time: "10/2/2018 17:00",
          like: 223,
          unlike: 32,
          avatarUrl: ""
        },
        {
          user: "luffy",
          content: "testesteffjdfjasofjwejfowjofj",
          time: "10/2/2018 17:00",
          like: 223,
          unlike: 32,
          avatarUrl: ""
        },
        {
          user: "luffy",
          content: "testesteffjdfjasofjwejfowjofj",
          time: "10/2/2018 17:00",
          like: 223,
          unlike: 32,
          avatarUrl: ""
        },
        {
          user: "luffy",
          content: "testesteffjdfjasofjwejfowjofj",
          time: "10/2/2018 17:00",
          like: 223,
          unlike: 32,
          avatarUrl: ""
        },
        {
          user: "luffy",
          content: "testesteffjdfjasofjwejfowjofj",
          time: "10/2/2018 17:00",
          like: 223,
          unlike: 32,
          avatarUrl: ""
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.comments {
  header {
    margin: 10px 0px;
    .comments-video {
      background: @blue;
      .inline-block(50px, 100%);
      text-align: center;
    }
  }
}
</style>
