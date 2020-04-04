/* eslint-disable no-undef */
const $buttons = $('.tab-btn');
const $tabs = $('.tab');

if(location.hash) {
  const btnActive = `[data-target="${location.hash}"]`;
  $('[data-target="#tab-1"]').removeClass('active-tab-btn');
  $('#tab-1').attr('hidden', true);

  $(btnActive).addClass('active-tab-btn');
  $(location.hash).attr('hidden', false);
}

$buttons.each(function() {
  $(this).on('click', function() {
    const target = $(this).data('target');

    $buttons.removeClass('active-tab-btn');
    $tabs.attr('hidden', true);

    $(this).addClass('active-tab-btn');
    $(target).attr('hidden', false);

    location.hash = target;
  });
});