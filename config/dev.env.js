module.exports = {
  NODE_ENV: '"development"',
  BASE_API: '"http://52.78.119.221:802/api/"',
  SSO_SITE: '"http://52.78.119.221:81"',
  API_MOCK: false,
  APP_ORIGIN: '"www.baidu.com"',
  // 七牛域名
  QINIU_DOMAIN_URL: '"http://7xlx4u.com1.z0.glb.clouddn.com/"',
  OAUTH_LWIO: {
    oauthClientInfo: {
      id: '"sample_app"',
      clientSecret: '"this_is_the_client_secret"',
      name: '"Sample App"',
      scope: '"user_info:read"',
      responseType: '"code"',
      grantType: '"authorization_code"',
      redirectUri: '"http://localhost:9528/receive-grant"'
    },
    endpoint: {
      authorize: '"http://localhost:29305/oauth/authorize"',
      token: '"http://localhost:29305/oauth/token"'
    },
    api: {
        getUserInfo: '"http://localhost:29305/api/user/detail"'
    }
  }
}
