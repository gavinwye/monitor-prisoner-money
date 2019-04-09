module.exports = function (router, content) {

  router.post('/payment-sources/', function (req, res) {
    res.redirect('/payment-sources/results')
  })

  // This is for the credits data
  router.get('/payment-sources/', function(req, res) {
    // location of credit data json file
    var senderData = require('../../data/sender_list.json');
    res.render('payment-sources/index',
    {
      senders: senderData
    });
  });

  // END__######################################################################################################
}
