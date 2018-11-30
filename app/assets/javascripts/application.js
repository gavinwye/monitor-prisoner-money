/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()

// This adds another of the compoent defined after the id of the same thing
  $("#addAnother").click(function(){
    $("#prisonInput").append(
      '<div id="prisonInput">' +
      '<div class="govuk-form-group">' +
      '<label class="govuk-label" for="name">' +
      'Prison name' +
      '</label>' +
      '<input class="govuk-input" id="name" name="name" type="text">' +
      '</div>' +
      '</div>'
    );
  });

})
