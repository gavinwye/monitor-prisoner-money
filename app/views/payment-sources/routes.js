module.exports = function (router, content) {

  router.post('/payment-sources', function (req, res) {
    res.redirect('/payment-sources/results')
  })

  router.post('/payment-sources/results', function (req, res) {
    res.redirect('/payment-sources/')
  })

  // This is for the credits data
  router.get('/payment-sources/', function(req, res) {
    // location of credit data json file
    var paymentSourceData = require('../../data/payment_source_list.json');
    res.render('payment-sources/index',
    {
      payment_sources: paymentSourceData
    });
  });

  // This is for the credits data
  router.get('/payment-sources/results', function(req, res) {
    // location of credit data json file
    var paymentSourceData = require('../../data/payment_source_list.json');
    let terms = (req.session.data.paymentSourceSearch || '').trim().split(/\s+/).map(term => term.toLowerCase())
    let paymentSources = paymentSourceData.filter(function (paymentSource) {
      for (let term of terms) {
        for (let field of [paymentSource.paymentSource_name, paymentSource.paymentSource_email]) {
          if ((field || '').toLowerCase().indexOf(term) >= 0) {
            return true
          }
        }
      }
      return false
    })
    res.render('payment-sources/results',
    {
      paymentSources: paymentSources
    });
  });

  // END__######################################################################################################
}
