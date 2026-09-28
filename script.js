document.addEventListener('DOMContentLoaded', () => {
  // 1. Gestion de l'exportation PDF
  const btnPrint = document.getElementById('btnPrint');
  if (btnPrint) {
    btnPrint.addEventListener('click', () => {
      window.print();
    });
  }

  // 2. Gestion de l'accordéon (Pliage/Dépliage des étapes)
  const toggleButtons = document.querySelectorAll('.toggle-btn');
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const stepBox = e.target.closest('.step-box');
      const content = stepBox.querySelector('.step-content');
      
      content.classList.toggle('collapsed');
      btn.innerHTML = content.classList.contains('collapsed') ? '&plus;' : '&minus;';
    });
  });

  // 3. Gestion des Checkbox & Barre de Progression
  const checkboxes = document.querySelectorAll('.task-list input[type="checkbox"]');
  const progressBar = document.getElementById('progressBar');
  const progressText = document.getElementById('progressText');

  function updateProgress() {
    const total = checkboxes.length;
    if (total === 0) return;
    
    const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
    const percentage = Math.round((checkedCount / total) * 100);

    if (progressBar) progressBar.style.width = percentage + '%';
    if (progressText) progressText.textContent = percentage + '%';
  }

  checkboxes.forEach(cb => {
    cb.addEventListener('change', updateProgress);
  });
});