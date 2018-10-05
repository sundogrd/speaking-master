<template>
  <transition :name="disableTransitions ? '' : 'sm-zoom-in-center'">
    <span
      :class="[
        type ? 'sm-tag--' + type : 'sm-tag',
        tagSize && `sm-tag--${tagSize}`,
        {'is-hit': hit}
      ]"
      :style="{backgroundColor: color}">
      <slot></slot>
      <i class="sm-tag__close sm-icon-close"
        v-if="closable"
        @click.stop="handleClose"></i>
    </span>
  </transition>
</template>
<script>
  export default {
    name: 'SmTag',
    props: {
      text: String,
      closable: Boolean,
      type: String,
      hit: Boolean,
      disableTransitions: Boolean,
      color: String,
      size: String
    },
    methods: {
      handleClose(event) {
        this.$emit('close', event);
      }
    },
    computed: {
      tagSize() {
        return this.size || (this.$ELEMENT || {}).size;
      }
    }
  };
</script>
<style lang="less" scoped>
.sm-tag {
  background-color: rgba(64, 158, 255, .1);
  display: inline-block;
  padding: 0 10px;
  height: 32px;
  line-height: 30px;
  font-size: 12px;
  color: #409eff;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid rgba(64, 158, 255, .2);
  white-space: nowrap;
  .sm-icon-close {
    border-radius: 50%;
    text-align: center;
    position: relative;
    cursor: pointer;
    font-size: 12px;
    height: 16px;
    width: 16px;
    line-height: 16px;
    vertical-align: middle;
    top: -1px;
    right: -5px;
    color: #409eff;
    &::before {
      display: block;
    }
    &:hover {
      background-color: #409eff;
      color: #fff;
    }
  }
}
.sm-tag--info, .sm-tag--info .sm-tag__close {
  color: #909399;
}
.sm-tag--info {
  background-color: rgba(144, 147, 153, .1);
  border-color: rgba(144, 147, 153, .2);
  &.is-hit {
    border-color: #909399;
  }
  .sm-tag__close {
    &:hover {
      background-color: #909399;
      color: #fff;
    }
  }
}
.sm-tag--success {
  background-color: rgba(103, 194, 58, .1);
  border-color: rgba(103, 194, 58, .2);
  color: #67c23a;
  &.is-hit {
    border-color: #67c23a;
  }
  .sm-tag__close {
    color: #67c23a;
    &:hover {
      background-color: #67c23a;
      color: #fff;
    }
  }
}
.sm-tag--warning {
  background-color: rgba(230, 162, 60, .1);
  border-color: rgba(230, 162, 60, .2);
  color: #e6a23c;
  &.is-hit {
    border-color: #e6a23c;
  }
  .sm-tag__close {
    color: #e6a23c;
    &:hover {
      background-color: #e6a23c;
      color: #fff;
    }
  }
}
.sm-tag--danger {
  background-color: rgba(245, 108, 108, .1);
  border-color: rgba(245, 108, 108, .2);
  color: #f56c6c;
  &.is-hit {
    border-color: #f56c6c;
  }
  .sm-tag__close {
    color: #f56c6c;
    &:hover {
      background-color: #f56c6c;
      color: #fff;
    }
  }
}
.sm-tag--medium {
  height: 28px;
  line-height: 26px;
  .sm-icon-close {
    -webkit-transform: scale(.8);
    transform: scale(.8);
  }
}
.sm-tag--small {
  height: 24px;
  padding: 0 8px;
  line-height: 22px;
  .sm-icon-close {
    -webkit-transform: scale(.8);
    transform: scale(.8);
  }
}
.sm-tag--mini {
  height: 20px;
  padding: 0 5px;
  line-height: 19px;
  .sm-icon-close {
    margin-left: -3px;
    -webkit-transform: scale(.7);
    transform: scale(.7);
  }
}

.sm-tag--label::before {
    display: inline;
    content: '/';
    padding-right: 4px;
}
.sm-tag--label:first-of-type::before{
    content: '';
}
</style>

