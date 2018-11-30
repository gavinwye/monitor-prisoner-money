/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()

// This adds another of the compoent defined after the id of the same thing
  $("#addAnother").click(function(){
    $("#prisonRow").after(
      '<div class="app-check-your-answers__contents list-item-row">' +
        '<dt class="app-check-your-answers__question">' +
          '{{ data[\'prison\'] }}' +
        '</dt>' +
        '<dd class="app-check-your-answers__change">' +
          '<a href="#" class="remove-list-item">' +
            'Remove<span class="govuk-visually-hidden"> Wandsworth prison</span>' +
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
})
