module.exports = function (router, content) {

  router.get('/credits/routes', function(req, res) {

      res.render('/credits/',
          {
              courts: utils.getcreditsList()
          });
  });

  // END__######################################################################################################
}
