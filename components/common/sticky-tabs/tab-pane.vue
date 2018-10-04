<template>
  <div
    class="sticky-tab-pane"
    v-if="(!lazy || loaded) || active"
    v-show="active"
    role="tabpanel"
    :aria-hidden="!active"
    :id="`pane-${paneName}`"
    :aria-labelledby="`tab-${paneName}`"
  >
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'StickyTabPane',

    componentName: 'StickyTabPane',

    props: {
      label: String,
      labelContent: Function,
      name: String,
      closable: Boolean,
      disabled: Boolean,
      lazy: Boolean
    },

    data() {
      return {
        index: null,
        loaded: false
      };
    },

    computed: {
      isClosable() {
        return this.closable || this.$parent.closable;
      },
      active() {
        const active = this.$parent.currentName === (this.name || this.index);
        // if (active) {
        //   this.loaded = true;
        // }
        return active;
      },
      paneName() {
        return this.name || this.index;
      }
    },

    watch: {
      label() {
        this.$parent.$forceUpdate();
      },
      active() {
        if (this.active) {
          this.loaded = true;
        }
      }
    }
  };
</script>
