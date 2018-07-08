<template>
  <div class="app-wrapper">
    <p>keke</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'index',
  components: {

  },
  computed: {},
  mounted () {
    this.getUserInfo()
      .then(res => {
      }).catch(e => {
      })
  },
  methods: {
    ...mapActions([
      'getUserInfo'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
