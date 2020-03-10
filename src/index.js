/* eslint-disable no-magic-numbers */

let tooltip;

function showTip (parent, text) {
  const offset = 5;
  const tip = document.createElement('span');
  tip.className = 'tip';
  tip.textContent = text;
  document.body.append(tip);

  const coordinates = parent.getBoundingClientRect();

  let left = coordinates.left + (parent.offsetWidth - tip.offsetWidth) / 2;
  if (left < 0) left = 0;

  let top = coordinates.top - tip.offsetHeight - offset;
  if (top < 0) {
    top = coordinates.top + parent.offsetHeight + offset;
  }

  tip.style.left = left + 'px';
  tip.style.top = top + 'px';

  return tip;
}

document.onmouseover = (event) => {
  const parent = event.target.closest('[data-tooltip]');

  if (!parent) return;

  tooltip = showTip(parent, parent.dataset.tooltip);
};

document.onmouseout = () => {
  if (tooltip) {
    tooltip.remove();
    tooltip = false;
  }
};



const $list = document.querySelector('.list');

for (const li of $list.querySelectorAll('li')) {
  const span = document.createElement('span');
  li.prepend(span);
  span.append(span.nextSibling);
}

$list.onclick = (event) => {
  if (event.target.tagName !== 'SPAN') {
    return;
  }

  const childrenContainer = event.target.parentNode.querySelector('ul');
  if (!childrenContainer) return;

  childrenContainer.hidden = !childrenContainer.hidden;
};