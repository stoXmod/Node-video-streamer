var express = require('express');
var path = require('path');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const range = req.headers.range;
  if (!range) {
    res.status(400).send('Requires range header');
  }

  const videoPath = path.resolve('react.mp4');
  const videoSize = fs.statSync(videoPath).size;

  const chunkSize = 10 ** 6;
  const start = Number(range.replace(/\D/g, ''));
  const end = Math.min(start + chunkSize, videoSize - 1);

  const contentLength = end - start + 1;
  const headers = {
    'Content-Range': `bytes ${start}-${end}/${videoSize}`,
    'Accept-Range': 'bytes',
    'Content-Length': contentLength,
    'Content-Type': 'video/mp4',
  };
  res.writeHead(206, headers);

  const videoStream = fs.createReadStream(videoPath, { start, end });

  videoStream.pipe(res);
});

module.exports = router;
