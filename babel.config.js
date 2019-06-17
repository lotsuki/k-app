module.exports = function (api) {
  // Cached based on the value of some function. If this function returns a value different from a previously-encountered value, the plugins will re-evaluate.

  var env = api.cache(() => process.env.NODE_ENV);
  const presets = [ ["@babel/preset-env"], "@babel/preset-react" ];

  return {
    presets
  };
}