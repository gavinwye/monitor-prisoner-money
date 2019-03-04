module.exports = function (router, content) {


  router.post('/notifications/email', function (req, res) {
    res.redirect('/sign-in/')
  })

  router.post('/prisons/', function (req, res) {
    res.redirect('/prisons/success')
  })

  router.post('/prisons/edit', function (req, res) {
    res.redirect('/prisons/success')
  })

  router.post('/prisons/success', function (req, res) {
    res.redirect('/notifications/')
  })

  router.post('/settings', function (req, res) {
    res.redirect('/prisons/edit')
  })

  router.post('/notifications/email-notifications', function (req, res) {
    res.redirect('/notifications/')
  })

  router.post('/sign-in/', function (req, res) {
    // Get the answer from the query string
    var notificationsEmail = req.session.data['notificationsEmail'] // USer is coming from notifications intro email
    var prisons = req.session.data['prisons'] // Prisons have been set

    if (notificationsEmail === 'notificationsEmail' && prisons === 'prisons') {
      // Redirect to the relevant page
      res.redirect('/notifications/')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/prisons/')
    }
  })

  // END__######################################################################################################
}
