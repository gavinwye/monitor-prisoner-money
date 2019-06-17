module.exports = function (router, content) {

  router.post('/senders/', function (req, res) {
    res.redirect('/senders/results')
  })

  router.post('/senders/results', function (req, res) {
    res.redirect('/senders/')
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
    let terms = (req.session.data.senderSearch || '').trim().split(/\s+/).map(term => term.toLowerCase())
    let senders = senderData.filter(function (sender) {
      for (let term of terms) {
        for (let field of [sender.sender_name, sender.sender_email]) {
          if ((field || '').toLowerCase().indexOf(term) >= 0) {
            return true
          }
        }
      }
      return false
    })
    res.render('senders/results',
    {
      senders: senders
    });
  });

  // END__######################################################################################################
}
