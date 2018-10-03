<template>
  <div id="index">
    <header>
      <search-bar></search-bar>
      <div class="notice">
        <icon-svg icon-class="notice" />
      </div>
    </header>
    <div>
      <p>keke</p>
    </div>
  </div>
</template>

<script>
import SearchBar from '~/components/index-header/search-bar.vue'
import Notice from '~/components/index-header/notice.vue'

export default {
  layout: 'sm',
  transition: 'bounce',
  components: {
    SearchBar
  }
}
</script>
<style scoped>
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

