const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

dotenvLoad()
 
const withNextEnv = nextEnv()

module.exports = withNextEnv({
  env: {
    API_URL: process.env.API_URL
  },
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    }
    return config
  }
})
