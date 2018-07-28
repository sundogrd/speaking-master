module.exports = {
  NODE_ENV: '"development"',
  BASE_API: '"http://localhost:8800/api/"',
  API_MOCK: false,
  APP_ORIGIN: '"www.baidu.com"',

  // OAUTH相关配置
  OAUTH_LWIO: {
    id: "5b5c355b9e71f1a45ce52f36",
    oauthClientInfo: {
      id: '"sample_app"',
      clientSecret: '"this_is_the_client_secret"',
      name: '"Sample App"',
      scope: '"user_info:read"',
      responseType: '"token"',
      grantType: '"implicit_code"',
      redirectUri: '"http://localhost:9528/receive-grant"'
    },
    endpoint: {
      authorize: '"http://localhost:29305/oauth/authorize"',
      token: '"http://localhost:29305/oauth/token"'
    },
    api: {
        getUserInfo: '"http://localhost:29305/api/users"'
    }
  }
}
