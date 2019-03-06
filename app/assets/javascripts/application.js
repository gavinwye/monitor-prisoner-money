/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()

// Add a the prison in the form on the prisons page
  // $(".addAnother").click(function(e){
  //   e.preventDefault();
  //   $(".list-item-row:last").after(
  //     '<div class="app-check-your-answers__contents list-item-row">' +
  //       '<dt class="app-check-your-answers__answer govuk-!-font-weight-bold">' +
  //         $('#prison').val() +
  //       '</dt>' +
  //       '<dd class="app-check-your-answers__change">' +
  //         '<a href="#" class="remove-list-item">' +
  //           'Remove<span class="govuk-visually-hidden"> {{data[\'prison\']}}</span>' +
  //         '</a>' +
  //       '</dd>' +
  //     '</div>'
  //   );
  // });

  $(".addAnother").click(function(e){
    e.preventDefault();
    $(".list-item-row:last").after(
      '<div class="list-item-row">' +
      '<label class="govuk-label" for="name">' +
        'Prison name' +
      '</label>' +
      '<input class="govuk-input govuk-!-margin-bottom-5" id="event-name" name="event-name" type="text">' +
      '</div>'
          );
  });


  // remove a prisons
  $(document).on('click', '.remove-list-item', function (e) {
    e.preventDefault();
    $(this).parents('.list-item-row').remove();
    sortParentFields();
  });

  // Remove all prisons
  $(document).on('click', '.remove-list-item-all-prisons', function (e) {
    e.preventDefault();
    $(this).parents('.all-prisons').replaceWith(
      '<div id="myDIV">'+
        '<dl class="app-check-your-answers app-check-your-answers--short govuk-!-margin-bottom-5">' +
          '<div class="app-check-your-answers__contents list-item-row">' +
          '</div>' +
        '</dl>' +
      '</div>'
    );
    sortParentFields();
  });


  $(function(){
      $('#notificationsOff').hide();
      $('.button-elem').click(function(){
          $('div > #notificationsOff').toggle();
          $('div > #notificationsOn').toggle();
      });

  });


  // Add javascripts above here
})
