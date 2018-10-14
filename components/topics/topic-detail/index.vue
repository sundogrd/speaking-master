<template>
    <div>
        <topic-video-item></topic-video-item>
        <topic-video-item></topic-video-item>
        <topic-video-item></topic-video-item>
        <topic-video-item></topic-video-item>
    </div>
</template>
<script>
import TopicVideoItem from "./topic-video-item.vue";
export default {
  name: "TopicVideoItems",
  componentName: "TopicVideoItems",
  components: {
    TopicVideoItem
  },
  props: {
    videos: {
      type: Array,
      default: () => []
    }
  }
  // data() {

  // },
  // computed: {

  // }
};
</script>
