<template>
  <v-layout row wrap class="container index">
    <header>
      <search-bar></search-bar>
      <div class="notice">
        <icon-svg icon-class="notice" />
      </div>
      <v-badge left>
      <span slot="badge">6</span>
      <v-icon
        large
        color="grey lighten-1"
      >
        shopping_cart
      </v-icon>
    </v-badge>
    </header>
    <div>
      <p>keke</p>
    </div>
  </v-layout>
</template>

<script>
import SearchBar from './SearchBar.vue'

export default {
  layout: 'sm',
  transition: 'bounce',
  components: {
    SearchBar
  }
}
</script>
<style lang="postcss" scoped>
.container {
  padding: 14px 18px;
}
.index {
  .search {
    height: 33px;
    margin-right: 5px;
    color: #aaaaaa;
    border: 1px solid #bbbbbb;
    background: #ebebeb;
    border-radius: 20px;
    font-size: 13px;
    .v-input__prepend-outer {
      i {
        color: #bbb;
      }
    }
  }
  .notice {

  }
}
</style>

