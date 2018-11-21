module.exports = function (router) {


  router.post('/notifications/email', function (req, res) {
    res.redirect('/notifications/index')
  })

  router.post('/notifications/index', function (req, res) {
    res.redirect('/notifications/confirmation')
  })

  // END__######################################################################################################
}
