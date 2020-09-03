const themeSwitcherList = document.getElementById('theme-switcher-list');
themeSwitcherList.addEventListener('click', (e) => {
  e.stopPropagation();
  if (e.target.tagName === 'SPAN') {
    document.body.classList = `has-${e.target.dataset.themeName}-theme`;
  }
});
