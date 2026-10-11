// Minimalist Wireframe Controller (No text / Pure Skeleton)

document.addEventListener('DOMContentLoaded', () => {
  const frame = document.getElementById('device-frame');
  const viewportBtns = document.querySelectorAll('.btn-ctrl[data-view]');
  const toggleThemeBtn = document.getElementById('toggle-theme-btn');
  const toggleModeBtn = document.getElementById('toggle-mode-btn');
  const viewWeb = document.getElementById('view-web');
  const viewResume = document.getElementById('view-resume');

  // 1. Viewport Switcher (Desktop / Tablet / Mobile)
  viewportBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      viewportBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const view = btn.getAttribute('data-view');
      
      frame.classList.remove('view-tablet', 'view-mobile');
      if (view === 'mobile') {
        frame.classList.add('view-mobile');
      } else if (view === 'tablet') {
        frame.classList.add('view-tablet');
      }
    });
  });

  // 2. Theme Switcher (Grayscale vs Blueprint)
  if (toggleThemeBtn) {
    toggleThemeBtn.addEventListener('click', () => {
      const current = document.body.getAttribute('data-theme');
      const next = current === 'blueprint' ? 'grayscale' : 'blueprint';
      document.body.setAttribute('data-theme', next);
      toggleThemeBtn.classList.toggle('active', next === 'blueprint');
    });
  }

  // 3. View Mode Switcher (Web Layout vs Resume Sheet)
  if (toggleModeBtn) {
    toggleModeBtn.addEventListener('click', () => {
      const isResume = viewWeb.style.display === 'none';
      if (isResume) {
        viewWeb.style.display = 'block';
        viewResume.style.display = 'none';
        toggleModeBtn.classList.remove('active');
      } else {
        viewWeb.style.display = 'none';
        viewResume.style.display = 'block';
        toggleModeBtn.classList.add('active');
      }
    });
  }
});
