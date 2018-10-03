<template>
  <div
    class="sm-container"
  >
    <nuxt />
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    bottomNav: 3,
    items: [
      { icon: "trending_up", text: "Most Popular" },
      { icon: "subscriptions", text: "Subscriptions" },
      { icon: "history", text: "History" },
      { icon: "featured_play_list", text: "Playlists" },
    ],
    items2: [
      { picture: 28, text: "Joseph" },
      { picture: 38, text: "Apple" },
      { picture: 48, text: "Xbox Ahoy" },
      { picture: 58, text: "Nokia" },
      { picture: 78, text: "MKBHD" }
    ]
  }),
  props: {
    source: String
  },
  computed: {
    color () {
      switch (this.bottomNav) {
        case 0: return 'blue-grey'
        case 1: return 'teal'
        case 2: return 'brown'
        case 3: return 'indigo'
      }
    }
  }
};
</script>

<style>
.sm-container {
  padding: 14px 17px;
}
</style>
