<template>
  <div class="sm-card" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'">
    <div class="sm-card__header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="sm-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
    <div class="sm-card__footer" :style="footerStyle">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SmCard",
  props: {
    header: {
      type: Object,
      required: false
    },
    bodyStyle: {
      type: Object,
      default: function() {
        return {};
      }
    },
    footerStyle: {
      type: Object,
      default: function() {
        return {};
      }
    },
    shadow: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="less">
.sm-card {
  padding: 0 4px;
  border-radius: 4px;
  background-color: #fff;
  overflow: hidden;
  color: @fontBlack;
  transition: 0.3s;
  margin-bottom: 10px;
  .sm-card__header {
    border-bottom: 1px solid #ebeef5;
    box-sizing: border-box;
  }
}
.sm-card.is-always-shadow,
.sm-card.is-hover-shadow:focus,
.sm-card.is-hover-shadow:hover {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
