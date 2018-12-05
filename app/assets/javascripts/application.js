/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()

// Add a the prison in the form on the prisons page
  $(".addAnother").click(function(e){
    e.preventDefault();
    $(".list-item-row:last").after(
      '<div class="app-check-your-answers__contents list-item-row">' +
        '<dt class="app-check-your-answers__answer">' +
          $('#prison').val() +
        '</dt>' +
        '<dd class="app-check-your-answers__change">' +
          '<a href="#" class="remove-list-item">' +
            'Remove<span class="govuk-visually-hidden"> {{data[\'prison\']}}</span>' +
          '</a>' +
        '</dd>' +
      '</div>'
    );
  });

  // remove a prisons
  $(document).on('click', '.remove-list-item', function (e) {
    e.preventDefault();
    $(this).parents('.list-item-row').remove();
    sortParentFields();
  });


  // Add javascripts above here
})
