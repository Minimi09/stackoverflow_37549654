const myRequest = require('./myRequest.js');
var options = { 
url: 'https://google.com'
};
myRequest.debug = true;
myRequest(options, (err, res, body) => {
 if (err) {
  console.error(err);
 }
 else {
  console.log(res.req._headers);
 }
});
