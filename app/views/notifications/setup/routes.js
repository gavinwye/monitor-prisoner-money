module.exports = function (router, content) {

  // Pass the content in to the pages
  router.get('/notifications/setup/', function (req, res) {
    res.render('notifications/setup/index', content)
  })
  router.get('/notifications/setup/monitored-transactions/', function (req, res) {
    res.render('notifications/setup/monitored-transactions', content)
  })
  router.get('/notifications/setup/amounts/', function (req, res) {
    res.render('notifications/setup/amounts', content)
  })
  router.get('/notifications/setup/frequency-of-transactions/', function (req, res) {
    res.render('notifications/setup/frequency-of-transactions', content)
  })
  router.get('/notifications/setup/prisoners/', function (req, res) {
    res.render('notifications/setup/prisoners', content)
  })
  router.get('/notifications/setup/debit-card-or-bank-account/', function (req, res) {
    res.render('notifications/setup/debit-card-or-bank-account', content)
  })
  router.get('/notifications/setup/email-frequency/', function (req, res) {
    res.render('notifications/setup/email-frequency', content)
  })
  router.get('/notifications/setup/check-your-answers/', function (req, res) {
    res.render('notifications/setup/check-your-answers', content)
  })


  // Monitored transactions
    router.post('/notifications/setup/monitored-transactions', function (req, res) {
      // Get the answer from the query string
      var monitoredTransactions = req.session.data['monitoredTransactions']
        res.redirect('/notifications/setup/amounts')
    })

 // Amounts
router.post('/notifications/setup/amounts', function (req, res) {
  res.redirect('/notifications/setup/frequency-of-transactions')
})
 // Frequency of transactions
router.post('/notifications/setup/frequency-of-transactions', function (req, res) {
  res.redirect('/notifications/setup/prisoners');
})
 // Prisoners
router.post('/notifications/setup/prisoners', function (req, res) {
  res.redirect('/notifications/setup/debit-card-or-bank-account');
})
// Debit cards or bank accounts
router.post('/notifications/setup/debit-card-or-bank-account', function (req, res) {
 res.redirect('/notifications/setup/email-frequency');
})
// Email frequency
router.post('/notifications/setup/email-frequency', function (req, res) {
 res.redirect('/notifications/setup/check-your-answers');
})

}
