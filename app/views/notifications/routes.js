module.exports = function (router) {


  router.post('/notifications/email', function (req, res) {
    res.redirect('/notifications/start')
  })

  router.post('/notifications/index', function (req, res) {
    res.redirect('/notifications/confirmation')
  })

  // Pass the content in to the page
  router.get('/notifications/setup/', function (req, res) {
    res.render('notifications/setup/index', content)
  })


  // END__######################################################################################################
}
