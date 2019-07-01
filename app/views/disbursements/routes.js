module.exports = function (router, content) {

  router.post('/disbursements/', function (req, res) {
    res.redirect('/disbursements/results')
  })

  // This is for the credits data
  router.get('/disbursements/', function(req, res) {
    // location of credit data json file
    var disbursementData = require('../../data/disbursement_list.json');
    res.render('disbursements/index',
    {
      disbursements: disbursementData
    });
  });

  // This is for the credits data
  router.get('/disbursements/results', function(req, res) {
    // location of credit data json file
    var disbursementData = require('../../data/disbursement_list.json');
    let terms = (req.session.data.disbursementSearch || '').trim().split(/\s+/).map(term => term.toLowerCase())
    let disbursements = disbursementData.filter(function (disbursement) {
      for (let term of terms) {
        for (let field of [disbursement.recipient_name, disbursement.prisoner_number]) {
          if ((field || '').toLowerCase().indexOf(term) >= 0) {
            return true
          }
        }
      }
      return false
    })
    res.render('disbursements/results',
    {
      disbursements: disbursements
    });
  });

  // This is for the credits data
  router.get('/disbursements/results-other-prisons', function(req, res) {
    // location of credit data json file
    var disbursementData = require('../../data/disbursement_list.json');
    let terms = (req.session.data.disbursementSearch || '').trim().split(/\s+/).map(term => term.toLowerCase())
    let disbursements = disbursementData.filter(function (disbursement) {
      for (let term of terms) {
        for (let field of [disbursement.recipient_name, disbursement.prisoner_number]) {
          if ((field || '').toLowerCase().indexOf(term) >= 0) {
            return true
          }
        }
      }
      return false
    })
    res.render('disbursements/results-other-prisons',
    {
      disbursements: disbursements
    });
  });

  // END__######################################################################################################
}
