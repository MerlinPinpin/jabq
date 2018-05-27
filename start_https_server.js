var https = require('https');
var fs = require('fs');
var port = 8000;
var hostname = 'www.jab.com'

var options = {
  key: fs.readFileSync('../certs/www.jab.com.key'),
  cert: fs.readFileSync('../certs/www.jab.com.crt')
};

  https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}).listen(port, hostname);
