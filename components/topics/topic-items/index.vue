<template>
  <div>
    <topic-item v-for="(topic, index) in topics" :key="index" :topic="topic"></topic-item>
  </div>
</template>
<script>
import TopicItem from "./topic-item.vue";
export default {
  name: "TopicItems",
  componentName: "TopicItems",
  components: {
    TopicItem
  },
  props: {
    topics: {
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
