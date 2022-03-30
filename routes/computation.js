var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function (req, res, next) {
  var x;
  var random = Math.random().toFixed(2);
  console.log(req.query.x);
  x = req.query.x;

  // checking if url has params
  if (x == undefined) {
    x = random;
  }

  res.render('computation', {
    title: 'Computation',
    value1: `Math.imul() applied to ` + x + ` is ${Math.imul(x,x).toFixed(2)}`,
    value2: `Math.log() applied to ` + x + ` is ${Math.log(x)}`,
    value3: `Math.log10() applied to ` + x + ` is ${Math.log10(x).toFixed(2)}`,
    
  });
});

module.exports = router;
