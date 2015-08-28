var express = require('express');
var router = express.Router();
var snippetsArray = require('../node_modules/express/lib/snippets.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hipstafy', sentences: "", emotion: "" });
});


router.post('/nextpage', function (req, res, next) { 
  console.log(req.body.sentences)                  
     
  var userInput = req.body.sentences
  var newArray = [];
  var words = userInput.split(' ')   

    for (var i=0; i<words.length; i++){
      var randomSnippet = Math.floor(Math.random() * snippetsArray.length);
      newArray.push(words[i]+ ' ' + snippetsArray[randomSnippet]);
    }
res.render('nextpage', { title: "Hipstafy", newphrase: newArray});
}) 

module.exports = router;
