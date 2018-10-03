<template>
  <div class="search-bar-inner">
    <div class="search-bar-input-wrap">
      <icon-svg icon-class="search" />
      <input placeholder="Search Topic/Speaking" type="search" class="">
      <span class="input-clear-button"></span>
    </div>
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
<style lang="less" scoped>
.search-bar-inner {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 12px;
  height: 33px;

  margin-right: 5px;
  color: #bbbbbb;
  background: #ebebeb;
  border-radius: 20px;
  .search-bar-input-wrap {
    display: flex;
    position: relative;
    width: 100%;
    height: 24px;
    .icon {
      position: absolute;

      font-size: 24px;
    }
    input {
      width: 100%;
      text-align: center;
      font-size: 13px;
      line-height: 13px;
      text-align: center;
      color: #999999;
      &::placeholder {
        color: #bbbbbb;
      }
    }
  }
}
</style>

