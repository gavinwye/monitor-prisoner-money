module.exports = function (router, content) {


  router.post('/notifications/email', function (req, res) {
    res.redirect('/notifications/start')
  })

  router.post('/notifications/start', function (req, res) {
    res.redirect('/notifications/prisons')
  })

  router.post('/notifications/prisons', function (req, res) {
    res.redirect('/notifications/index')
  })

  router.post('/notifications/index', function (req, res) {
    res.redirect('/notifications/confirmation')
  })

  // Pass the content in to the page
  router.get('/notifications/start/', function (req, res) {
    res.render('notifications/start', content)
  })

  // END__######################################################################################################
}
