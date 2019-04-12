module.exports = function (router, content) {

  router.post('/disbursements/', function (req, res) {
    res.redirect('/disbursements/results')
  })

  // This is for the credits data
  router.get('/disbursements/', function(req, res) {
    // location of credit data json file
    var disbursementData = require('../../data/disbursement_list.json');
    res.render('disbursements/index',
    {
      disbursements: disbursementData
    });
  });

  // This is for the credits data
  router.get('/disbursements/results', function(req, res) {
    // location of credit data json file
    var disbursementData = require('../../data/disbursement_list.json');
    res.render('disbursements/results',
    {
      disbursements: disbursementData
    });
  });

  // END__######################################################################################################
}
