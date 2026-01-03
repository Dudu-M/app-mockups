// MAIN TABS
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(tab.dataset.target).classList.add('active');
  });
});

// LIGHT / DARK TOGGLES
document.querySelectorAll('.panel').forEach(panel => {
  const subtabs = panel.querySelectorAll('.subtab');
  const contents = panel.querySelectorAll('.theme-content');

  subtabs.forEach(subtab => {
    subtab.addEventListener('click', () => {
      subtabs.forEach(s => s.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      subtab.classList.add('active');
      panel
        .querySelector(`.theme-content[data-theme="${subtab.dataset.theme}"]`)
        .classList.add('active');
    });
  });
});
