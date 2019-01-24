module.exports = function (router, content) {

  router.post('/notifications/email', function (req, res) {
    res.redirect('/sign-in/')
  })

  router.post('/sign-in/', function (req, res) {
    res.redirect('/prisons/')
  })

  router.post('/prisons/', function (req, res) {
    res.redirect('/prisons/success')
  })

  router.post('/prisons/success', function (req, res) {
    res.redirect('/notifications/')
  })

  router.post('/notifications/', function (req, res) {
    res.redirect('/notifications/notifications-page')
  })

  // Pass the content in to the page
  router.get('/notifications/start/', function (req, res) {
    res.render('notifications/start', content)
  })

  // END__######################################################################################################
}
