module.exports = function (router, content) {

  router.post('/credits/', function (req, res) {
    res.redirect('/credits/results')
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

  // END__######################################################################################################
}
