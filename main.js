function setCollapseActive(collapseEl, isActive) {
  if (!collapseEl) return;

  const icon = collapseEl.querySelector('.collapse__icon');

  if (isActive) {
    collapseEl.classList.remove('active');
    if (icon) icon.src = './assets/images/icon-plus.svg';
  } else {
    collapseEl.classList.add('active');
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
