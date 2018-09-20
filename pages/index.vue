<template>
  <v-layout row wrap class="container index">
    <v-flex xs10>
      <div class="search">
        <v-input
          append-icon="close"
          prepend-icon="search"
        >
          Default Slot
        </v-input>
      </div>
    </v-flex>
    <v-flex xs2>
      <div class="notice">
        <p>Noti</p>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  layout: 'sm',
  transition: 'bounce',
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
<style lang="postcss" scoped>
.container {
  padding: 14px 18px;
}
.index {
  .search {
    height: 33px;
    margin-right: 5px;
    color: #aaaaaa;
    border: 1px solid #bbbbbb;
    background: #ebebeb;
    border-radius: 20px;
  }
  .notice {

  }
}
</style>

