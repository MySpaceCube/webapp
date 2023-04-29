module.exports = {
  apps: [
    {
      name: process.env.NUXT_ENV !== 'prod' ? 'webapp-beta' : 'webapp',
      port: process.env.NUXT_ENV !== 'prod' ? '3000' : '3080',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}
