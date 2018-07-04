<template>
  <div class="navbar">
    <div class="navbar-header">
      <div class="logo" @click="$router.push({path: '/'})">Website</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    logout () {
      this.$store.dispatch('Logout').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    },
    visibleChange () {
      this.isShowDrop = !this.isShowDrop
    }
  },
  mounted () {
    // this.toWs();
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: $nav-height;
  max-width: 1260px;
  width: 100%;
  display: flex;
  flex-direction: column;
  .navbar-header{
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: stretch;
    height: 55px;
    .logo{
      cursor: pointer;
      color: #fff;
      font-size: 30px;
      display: flex;
      align-items: center;
    }
  }
}
</style>
