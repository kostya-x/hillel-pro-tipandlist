/* eslint-disable no-undef */
/* eslint-disable no-magic-numbers */

let tooltip;

function showTip (parent, text) {
  const offset = 5;
  const textContent = text;
  const coordinates = $(parent).offset();
  const tip = $('<span>');

  $('body').append(tip);
  $(tip).addClass('tip');
  $(tip).text(textContent);

  let positionLeft = coordinates.left + ($(parent).outerWidth() - tip.outerWidth()) / 2;
  if (positionLeft < 0) positionLeft = 0;

  let positionTop = coordinates.top - tip.outerHeight() - offset;
  if (positionTop < 0) { positionTop = coordinates.top + $(parent).outerHeight() + offset; }

  $(tip).css({'left': positionLeft, 'top': positionTop});

  return tip;
}

$('[data-tooltip]').mouseover((event) => {
  const parent = event.target;

  if (!parent) return;

  tooltip = showTip(parent, parent.dataset.tooltip);
});

$('[data-tooltip]').mouseleave(() => {
  if (tooltip) {
    tooltip.remove();
    tooltip = false;
  }
});

const $list = $('.list');

$list.each((index, element) => {
  for (const li of $list) {
    const span = document.createElement('span');
    li.prepend(span);
    span.append(span.nextSibling);
  }

  element.onclick = (event) => {
    if (event.target.tagName !== 'SPAN') {
      return;
    }

    const childrenContainer = event.target.parentNode.querySelector('ul');
    if (!childrenContainer) return;

    childrenContainer.hidden = !childrenContainer.hidden;
  };
});