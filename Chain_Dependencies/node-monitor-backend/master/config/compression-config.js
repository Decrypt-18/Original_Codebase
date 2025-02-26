const compression = require('compression');

function shouldCompress(req, res) {

  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }

  // fallback to standard filter function
  return compression.filter(req, res)
}

function configCompression(app) {
  //
  if (process.env.ENABLE_GZIP === 'false') {
    return false;
  }

  app.use(compression({ filter: shouldCompress }));
}

module.exports = configCompression;
