<template>
  <div class="navbar">
    <div class="navbar-header">
      <div class="logo" @click="$router.push({path: '/'})">Speaking Master</div>
      <div class="user-banner">
        <span v-if="!auth.user && auth.user.username" @click="goAuth">Auth</span>
        <span v-else @click="signout">{{auth.user.username}} SignOut</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

function composeUri (uri, query = {}) {
  var f, s, arr

  arr = []

  for (f in query) {
    if (typeof query.hasOwnProperty !== 'function' || query.hasOwnProperty(f)) {
      arr.push(`${f}=${encodeURIComponent(query[f])}`)
    }
  }

  s = arr.join('&')

  if (s && !/\?$/.test(uri)) {
    s = '?' + s
  }
  return `${uri}${s}`
}

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['auth'])
  },
  methods: {
    ...mapActions([
      'signoutAction'
    ]),
    signout () {
      this.signoutAction().then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    },
    visibleChange () {
      this.isShowDrop = !this.isShowDrop
    },
    goAuth () {
      window.location.href = composeUri(process.env.OAUTH_LWIO.endpoint.authorize, {
        'response_type': process.env.OAUTH_LWIO.oauthClientInfo.responseType,
        'client_id': process.env.OAUTH_LWIO.oauthClientInfo.id,
        'scope': process.env.OAUTH_LWIO.oauthClientInfo.scope,
        'redirect_uri': process.env.OAUTH_LWIO.oauthClientInfo.redirectUri,
        'state': 'fuck'
      })
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
      color: #006bff;
      font-size: 30px;
      display: flex;
      align-items: center;
    }
  }
}
</style>
