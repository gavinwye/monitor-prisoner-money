module.exports = function (router) {

  // Monitored transactions
  router.post('/notifications/setup/monitored-transactions', function (req, res) {
  // Get the answer from the query string
  var monitoredTransactions = req.session.data['monitoredTransactions']

  if (monitoredTransactions === 'Yes') {
    // Redirect to the relevant page
    res.redirect('/notifications/setup/amounts')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/notifications/setup/amounts')
  }
  })

  // Amounts
  router.post('/notifications/setup/amounts', function (req, res) {
  // Get the answer from the query string
  var wholeNumber = req.session.data['wholeNumber']

  if (wholeNumber === 'Yes') {
    // Redirect to the relevant page
    res.redirect('/notifications/setup/frequency-of-transactions')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/notifications/setup/frequency-of-transactions')
  }
  })

  // Frequency of transactions
  router.post('/notifications/setup/frequency-of-transactions', function (req, res) {
    res.redirect('/notifications/setup/prisoners');
  })

  // Prisoners
  router.post('/notifications/setup/prisoners', function (req, res) {
    res.redirect('/notifications/setup/debit-card-or-bank-account');
  })

}
