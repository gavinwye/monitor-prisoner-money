module.exports = function (router, content) {

  router.post('/credits/', function (req, res) {
    res.redirect('/credits/results')
  })

  router.post('/credits/results', function (req, res) {
    res.redirect('/credits/results')
  })

  router.post('/credits/results', function (req, res) {
    res.redirect('/credits/global-results')
  })

  // This is for the credits data
  router.get('/credits/', function(req, res) {
    // location of credit data json file
    var creditData = require('../../data/credits_list.json');
    res.render('credits/index',
    {
      credits: creditData
    });
  });

  // This is for the credits data
  router.get('/credits/results', function(req, res) {
    // location of credit data json file
    var creditData = require('../../data/credits_list.json');
    let terms = (req.session.data.creditSearch || '').trim().split(/\s+/).map(term => term.toLowerCase())
    let credits = creditData.filter(function (credit) {
      for (let term of terms) {
        for (let field of [credit.sender_email, credit.prisoner_number, credit.sender_name]) {
          if ((field || '').toLowerCase().indexOf(term) >= 0) {
            return true
          }
        }
      }
      return false
    })
    res.render('credits/results',
    {
      credits: credits
    });
  });

  // This is for the credits data
  router.get('/credits/global-results', function(req, res) {
    // location of credit data json file
    var creditData = require('../../data/credits_list.json');
    let terms = (req.session.data.creditSearch || '').trim().split(/\s+/).map(term => term.toLowerCase())
    let credits = creditData.filter(function (credit) {
      for (let term of terms) {
        for (let field of [credit.sender_email, credit.prisoner_number, credit.sender_name]) {
          if ((field || '').toLowerCase().indexOf(term) >= 0) {
            return true
          }
        }
      }
      return false
    })
    res.render('credits/global-results',
    {
      credits: credits
    });
  });

  // END__######################################################################################################
}
