http = require('http');
fs = require('fs');
 
port = 8080;
host = '127.0.0.1';
	
server = http.createServer( function(req, res) {
	
	if (req.method == 'GET') {
        console.log("Handling GET request...");
		console.log(req.url);
        res.writeHead(200, {'Content-Type': 'text/html'});
 
            console.log("GET payload: " + body);
    }
	
    if (req.method == 'POST') {
        console.log("Handling POST request...");
		console.log(req.url);
        res.writeHead(200, {'Content-Type': 'text/html'});
		
        var body = '';
        req.on('data', function (data) {
            body += data;
        });
        req.on('end', function () {
            console.log("POST payload: " + body);
        	res.end( '' );
        });
    }
	
	  if (req.method == 'PUT') {
        console.log("Handling PUT request...");
        res.writeHead(200, {'Content-Type': 'text/html'});
 
        var body = '';
        req.on('data', function (data) {
            body += data;
        });
        req.on('end', function () {
            console.log("PUT payload: " + body);
        	res.end( '' );
        });
    }
		
	 if (req.method == 'OPTIONS') {
        console.log("Handling OPTIONS request...");
		console.log(req.url);
        res.writeHead(200, {'Content-Type': 'text/html'});
 
        var body = '';
        req.on('data', function (data) {
            body += data;
        });
        req.on('end', function () {
            console.log("OPTIONS payload: " + body);
        	res.end( '' );
        });
    }
	 
    else
    {
        console.log("Not expecting other request types...");
        res.writeHead(200, {'Content-Type': 'text/html'});
		var html = '<html><body>HTTP Server at http://' + host + ':' + port + '</body></html>';
        res.end(html);
    }
 
});
 
server.listen(port, host);
console.log('Listening at http://' + host + ':' + port);