const request = require('request');
const myRequest = request.defaults({
  headers: {'x-token': 'my-token'}
});
module.exports = exports = myRequest;

