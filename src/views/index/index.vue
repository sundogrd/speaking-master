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
  async mounted () {
    this.getUserInfo()
      .then(res => {
        debugger
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
