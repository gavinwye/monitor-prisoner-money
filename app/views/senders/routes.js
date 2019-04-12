module.exports = function (router, content) {

  router.post('/senders/', function (req, res) {
    res.redirect('/senders/results')
  })

  // This is for the credits data
  router.get('/senders/', function(req, res) {
    // location of credit data json file
    var senderData = require('../../data/sender_list.json');
    res.render('senders/index',
    {
      senders: senderData
    });
  });

  // This is for the credits data
  router.get('/senders/results', function(req, res) {
    // location of credit data json file
    var senderData = require('../../data/sender_list.json');
    res.render('senders/results',
    {
      senders: senderData
    });
  });

  // END__######################################################################################################
}
