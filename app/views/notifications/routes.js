module.exports = function (router, content) {


  router.post('/notifications/email', function (req, res) {
    res.redirect('/sign-in/')
  })

  router.post('/sign-in/', function (req, res) {
    res.redirect('/prisons')
  })

  router.post('/prisons/', function (req, res) {
    res.redirect('/prisons/success')
  })

  router.post('/notifications/start', function (req, res) {
    res.redirect('/notifications/setup/prisons/')
  })

  router.post('/notifications/setup/prisons/', function (req, res) {
    res.redirect('/notifications/')
  })

  router.post('/notifications/', function (req, res) {
    res.redirect('/notifications/confirmation')
  })

  router.post('/notifications/confirmation', function (req, res) {
    res.redirect('/')
  })

  // Pass the content in to the page
  router.get('/notifications/start/', function (req, res) {
    res.render('notifications/start', content)
  })

  // END__######################################################################################################
}
