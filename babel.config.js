module.exports = api => {
  api.cache(false)

  const plugins = []

  const presets = ['@vue/app']

  const env = {
    test: {
      presets: [["@babel/env", { "targets": { "node": "current" } }]]
    },
    production: {
    }
  }

  return {
    plugins,
    presets,
    env,
  }
}
