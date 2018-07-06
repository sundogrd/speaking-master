<template>
  <div class="app-wrapper">
    <p>receiveGrant</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'receiveGrant',
  components: {

  },
  computed: {},
  async mounted () {
    console.log(this)
    const { code, state } = this.$route.query
    this.getToken({code, state}).then(res => {
      if (res === true) {
        window.location.href = '/'
      }
    })

    // redirectToAuthorize(ctx)
  },
  methods: {
    ...mapActions([
      'getToken'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
