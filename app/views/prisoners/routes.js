module.exports = function (router, content) {

  router.get('/credits/routes', function(req, res) {

      res.render('/credits/',
          {
              courts: utils.getcreditsList()
          });
  });

  // This is for the credits data
  router.get('/prisoners/', function(req, res) {
    // location of credit data json file
    var prisonerData = require('../../data/prisoner_list.json');
    res.render('prisoners/index',
    {
      prisoners: prisonerData
    });
  });

  // END__######################################################################################################
}
