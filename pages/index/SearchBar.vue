<template>
  <div class="searchbar-inner">
    <div class="searchbar-input-wrap">
      <input placeholder="Search" type="search" class="">
      <i class="searchbar-icon"></i>
      <span class="input-clear-button"></span>
    </div>
    <span class="searchbar-disable-button">Cancel</span>
  </div>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>
<style lang="postcss" scoped>
.search-bar {
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
</style>

