function setCollapseActive(collapseEl, isActive) {
  if (!collapseEl) return;

  const header = collapseEl.querySelector('.collapse__header');
  const content = collapseEl.querySelector('.collapse__content');
  const icon = collapseEl.querySelector('.collapse__icon');

  if (isActive) {
    collapseEl.classList.remove('active');
    header.setAttribute('aria-expanded', 'false');
    header.setAttribute('aria-hidden', 'true');
    if (icon) icon.src = './assets/images/icon-plus.svg';
  } else {
    collapseEl.classList.add('active');
    header.setAttribute('aria-expanded', 'true');
    header.setAttribute('aria-hidden', 'false');
    if (icon) icon.src = './assets/images/icon-minus.svg';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const headers = document.querySelectorAll('.collapse__header');

  headers.forEach((header) => {
    header.addEventListener('click', () => {
      const parent = header.closest('.collapse');
      const isActive = parent.classList.contains('active');

      document
        .querySelectorAll('.collapse.active')
        .forEach((el) => setCollapseActive(el, true));

      setTimeout(() => !isActive && setCollapseActive(parent, false), 500);
    });
  });
});
