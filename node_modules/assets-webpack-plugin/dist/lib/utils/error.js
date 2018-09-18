'use strict';

var assign = require('lodash.assign');

module.exports = function pluginError(message, previousError) {
  var err = new Error('[AssetsWebpackPlugin] ' + message);

  return previousError ? assign(err, previousError) : err;
};