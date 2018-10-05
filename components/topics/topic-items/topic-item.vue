<template>
    <sm-card>
        <topic-header slot="header" v-bind="header"></topic-header>
        <topic-body v-bind="body"></topic-body>
        <topic-footer slot="footer" v-bind="footer"></topic-footer>
    </sm-card>
</template>
<script>
import SmCard from '~/components/common/sm-card';
import TopicHeader from "./topic-header";
import TopicBody from "./topic-body";
import TopicFooter from "./topic-footer";
export default {
  name: "TopicItem",
  componentName: "TopicItem",
  components: {
    TopicHeader,
    TopicBody,
    TopicFooter,
    SmCard
  },
  props: {
    topic: Object
  },
  data() {
    const {
      recommend,
      imgUrl,
      tags,
      title,
      content,
      time,
      listenNum,
      videoNum,
      like
    } = this.topic;
    const header = { imgUrl, recommend, tags };
    const body = { title, content };
    const footer = { time, listenNum, videoNum, like };
    return {
      header,
      body,
      footer
    };
  },
  computed: {

  }
};
</script>
