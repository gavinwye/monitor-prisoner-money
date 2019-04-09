module.exports = function (router, content) {

  router.get('/credits/routes', function(req, res) {

      res.render('/credits/',
          {
              courts: utils.getcreditsList()
          });
  });

  // This is for the credits data
  router.get('/disbursements/', function(req, res) {
    // location of credit data json file
    var disbursementData = require('../../data/disbursement_list.json');
    res.render('disbursements/index',
    {
      disbursements: disbursementData
    });
  });

  // END__######################################################################################################
}
