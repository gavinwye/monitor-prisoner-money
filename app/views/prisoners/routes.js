module.exports = function (router, content) {

  router.post('/prisoners/', function (req, res) {
    res.redirect('/prisoners/results')
  })

  // This is for the credits data
  router.get('/prisoners/', function(req, res) {
    // location of credit data json file
    var prisonerData = require('../../data/prisoner_list.json');
    res.render('prisoners/index',
    {
      prisoners: prisonerData
    });
  });

  // This is for the credits data
  router.get('/prisoners/results', function(req, res) {
    // location of credit data json file
    var prisonerData = require('../../data/prisoner_list.json');
    res.render('prisoners/results',
    {
      prisoners: prisonerData
    });
  });

  // END__######################################################################################################
}
