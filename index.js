var express = require('express');
var app = express();

app.use(function (req, res, next) {
  if (!/https/.test(req.protocol)) {
    res.redirect("https://" + req.headers.host + req.url);
  } else {
    return next();
  }
});

var webServer = app.listen(3000, function () {
  console.log('Listening on port 3000');
});
