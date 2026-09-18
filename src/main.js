// Import style.css for Vite bundling
import './style.css';
import { initSkills } from './skills.js';
import { initServices } from './services.js';
import { initProjects } from './projects.js';
import { initContact } from './contact.js';

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initActiveNav();
  initSkills();
  initServices();
  initProjects();
  initContact();

  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});

/**
 * Initialize Mobile Navigation Menu
 */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuOpenIcon = document.getElementById('menu-open-icon');
  const menuCloseIcon = document.getElementById('menu-close-icon');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !mobileMenu) return;

  mobileMenu.style.pointerEvents = 'none';

  function toggleMenu(open) {
    const isOpen = open !== undefined ? open : mobileMenu.classList.contains('hidden');

    if (isOpen) {
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('flex');
      mobileMenu.style.pointerEvents = 'auto';
      if (menuOpenIcon) menuOpenIcon.classList.add('hidden');
      if (menuCloseIcon) menuCloseIcon.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    } else {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
      mobileMenu.style.pointerEvents = 'none';
      if (menuOpenIcon) menuOpenIcon.classList.remove('hidden');
      if (menuCloseIcon) menuCloseIcon.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  menuBtn.addEventListener('click', () => toggleMenu());

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') toggleMenu(false);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      toggleMenu(false);
    }
  });
}

/**
 * Highlight active navigation link for the single-page layout.
 */
function initActiveNav() {
  const navLinks = document.querySelectorAll('.nav-link');
  const allLinks = [...navLinks];

  const sectionMap = {
    home: '#home',
    skills: '#skills',
    services: '#services',
    projects: '#projects',
    education: '#education',
    contact: '#contact',
  };

  function setActive(targetHref) {
    allLinks.forEach((link) => {
      const href = link.getAttribute('href').toLowerCase();
      if (href === targetHref) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  allLinks.forEach((link) => {
    link.addEventListener('click', () => {
      setActive(link.getAttribute('href').toLowerCase());
    });
  });

  const initialHash = window.location.hash.toLowerCase();
  if (initialHash && sectionMap[initialHash.replace('#', '')]) {
    setActive(initialHash);
  } else {
    setActive('#home');
  }

  const navbarHeight = document.querySelector('header')?.offsetHeight || 80;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const href = sectionMap[entry.target.id];
          if (href) setActive(href);
        }
      });
    },
    {
      root: null,
      rootMargin: `-${navbarHeight}px 0px -45% 0px`,
      threshold: 0,
    }
  );

  Object.keys(sectionMap).forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}
