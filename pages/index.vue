<template>
  <div class="index">
    <header>
      <search-bar class="search"></search-bar>
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
<style lang="less" scoped>
.index {
  header {
    display: flex;
    .search {
      flex: 1;
    }
    .notice {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 0 0 33px;
      font-size: 24px;
    }
  }
}
</style>

