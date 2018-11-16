module.exports = function (router, content) {

  // Pass the content in to the page
  router.get('/notifications/setup/', function (req, res) {
    res.render('notifications/setup/index', content)
  })

}
