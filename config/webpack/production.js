const environment = require('./environment')
const customConfig = require('./custom')

// Merge custom config
environment.config.merge(customConfig)

module.exports = environment.toWebpackConfig()
