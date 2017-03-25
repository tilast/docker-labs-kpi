const Express = require('express');
const http = require('http');

const server = Express();

server.set('port', process.env.PORT || 3000);

server.get('/', (req, res) => {
  http.get({
      host: 'python-app',
      path: '/',
      port: '5000'
  }, function(response) {
      // Continuously update stream with data
      var body = '';
      response.on('data', function(d) {
          body += d;
      });
      response.on('end', function() {
          // Data reception is done, do whatever with it!
          res.json({
            message: 'Hello World!',
            data: body
          });
      });
  });
  // res.json({
  //   message: 'Hello World!'
  // });
});

server.listen(server.get('port'), (err) => {
  if (err) {
    console.log('Server start error');
    process.exit(1);
  }

  console.log(`Server is listening at http://localhost:${server.get('port')}`);
});
