'use strict';

const sidebar = document.querySelector('[data-sidebar]');
const sidebarButton = document.querySelector('[data-sidebar-btn]');

if (sidebar && sidebarButton) {
  sidebarButton.addEventListener('click', () => sidebar.classList.toggle('active'));
}

const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

navigationLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const selectedPage = link.textContent.trim().toLowerCase();

    pages.forEach((page) => {
      page.classList.toggle('active', page.dataset.page === selectedPage);
    });

    navigationLinks.forEach((navigationLink) => {
      navigationLink.classList.toggle('active', navigationLink === link);
    });

    window.scrollTo(0, 0);
  });
});

const filterItems = document.querySelectorAll('[data-filter-item]');
const filterButtons = document.querySelectorAll('[data-filter-btn]');
const filterSelect = document.querySelector('[data-select]');
const filterSelectValue = document.querySelector('[data-selecct-value]');
const filterSelectItems = document.querySelectorAll('[data-select-item]');

const filterProjects = (selectedCategory) => {
  filterItems.forEach((item) => {
    item.classList.toggle(
      'active',
      selectedCategory === 'all' || item.dataset.category === selectedCategory
    );
  });
};

const updateFilter = (category, label) => {
  filterProjects(category);

  if (filterSelectValue) {
    filterSelectValue.textContent = label;
  }

  filterButtons.forEach((button) => {
    button.classList.toggle('active', button.textContent.trim().toLowerCase() === category);
  });
};

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const label = button.textContent.trim();
    updateFilter(label.toLowerCase(), label);
  });
});

if (filterSelect) {
  filterSelect.addEventListener('click', () => filterSelect.classList.toggle('active'));
}

filterSelectItems.forEach((item) => {
  item.addEventListener('click', () => {
    const label = item.textContent.trim();
    updateFilter(label.toLowerCase(), label);
    if (filterSelect) {
      filterSelect.classList.remove('active');
    }
  });
});

const form = document.querySelector('[data-form]');
const formButton = document.querySelector('[data-form-btn]');

if (form && formButton) {
  form.addEventListener('input', () => {
    formButton.disabled = !form.checkValidity();
  });
}
