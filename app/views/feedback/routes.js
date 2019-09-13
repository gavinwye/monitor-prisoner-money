module.exports = function (router, content) {


  router.post('/feedback/index', function (req, res) {
    res.redirect('/feedback/success')
  })

  // END__######################################################################################################
}
