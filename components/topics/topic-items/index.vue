<template>
  <div>
    <nuxt-link v-for="(topic, index) in topics" :key="index" :to="`/topics/${topic.id || 0}`">
      <topic-item :topic="topic"></topic-item>
    </nuxt-link>
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
