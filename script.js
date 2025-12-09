(() => {
  const toggle = document.getElementById('themeToggle');
  const body = document.body;
  const storageKey = 'preferred-theme';

  function applyTheme(isLight){
    if(isLight){
      body.classList.add('light');
      toggle.checked = true;
    } else {
      body.classList.remove('light');
      toggle.checked = false;
    }
  }

  // load preference
  const stored = localStorage.getItem(storageKey);
  if(stored !== null){
    applyTheme(stored === 'light');
  } else {
    // default to dark
    applyTheme(false);
  }

  toggle.addEventListener('change', () => {
    const isLight = toggle.checked;
    applyTheme(isLight);
    localStorage.setItem(storageKey, isLight ? 'light' : 'dark');
  });
})();
