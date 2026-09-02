// Ledgerline — shared site behaviour

// Mobile nav toggle (present on every page)
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
if (navToggle && mobileMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Solutions page — industry tabs
const industryTabs = document.querySelectorAll('.industry-tab');
if (industryTabs.length) {
  const panels = {
    wholesale: document.getElementById('panel-wholesale'),
    distribution: document.getElementById('panel-distribution'),
    merchants: document.getElementById('panel-merchants'),
    retail: document.getElementById('panel-retail'),
  };
  industryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      industryTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      Object.values(panels).forEach(p => { if (p) p.style.display = 'none'; });
      const target = panels[tab.dataset.target];
      if (target) target.style.display = 'block';
    });
  });
}

// Contact / demo request form — lightweight client-side validation
const demoForm = document.getElementById('demoForm');
if (demoForm) {
  const status = document.getElementById('formStatus');

  const showError = (fieldGroup, message) => {
    fieldGroup.classList.add('has-error');
    fieldGroup.classList.remove('has-success');
    const help = fieldGroup.querySelector('.help');
    if (help) help.textContent = message;
  };
  const clearError = (fieldGroup) => {
    fieldGroup.classList.remove('has-error');
    const help = fieldGroup.querySelector('.help');
    if (help) help.textContent = help.dataset.default || '';
  };

  demoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    status.className = 'form-status';
    status.textContent = '';

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const company = document.getElementById('company');

    [name, email, company].forEach(input => {
      const group = input.closest('.field-group');
      if (!input.value.trim()) {
        showError(group, 'This field is required.');
        valid = false;
      } else {
        clearError(group);
      }
    });

    if (email.value.trim() && !/^\S+@\S+\.\S+$/.test(email.value.trim())) {
      showError(email.closest('.field-group'), 'Enter a valid email address.');
      valid = false;
    }

    if (valid) {
      status.classList.add('success');
      status.textContent = "Thanks — that's a simulated submission for portfolio purposes. In production this would send to Ledgerline's CRM.";
      demoForm.reset();
    } else {
      status.classList.add('error');
      status.textContent = 'Please fix the highlighted fields and try again.';
    }
  });
}
