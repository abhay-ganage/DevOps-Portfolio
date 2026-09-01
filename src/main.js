// Import style.css for Vite bundling
import './style.css';
import { initSkills } from './skills.js';
import { initServices } from './services.js';
import { initProjects } from './projects.js';
import { initContact } from './contact.js';
import { initChatbot } from './chatbot.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initActiveNav();
  initSkills();
  initServices();
  initProjects();
  initContact();
  initChatbot();
});

/**
 * Initialize Dark / Light Theme System
 */
function initTheme() {
  const themeToggles = document.querySelectorAll('.theme-toggle-btn');
  if (!themeToggles.length) return;

  // Determine current theme
  let currentTheme = localStorage.getItem('theme');
  if (!currentTheme) {
    currentTheme = 'dark';
  }

  applyTheme(currentTheme);

  themeToggles.forEach((btn) => {
    btn.addEventListener('click', () => {
      const activeTheme = document.documentElement.classList.contains('light') ? 'light' : 'dark';
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    });
  });
}

function applyTheme(theme) {
  const html = document.documentElement;
  const themeToggles = document.querySelectorAll('.theme-toggle-btn');

  if (theme === 'light') {
    html.classList.remove('dark');
    html.classList.add('light');
  } else {
    html.classList.remove('light');
    html.classList.add('dark');
  }

  // Update button icons & ARIA attributes
  themeToggles.forEach((btn) => {
    const sunIcon = btn.querySelector('.sun-icon');
    const moonIcon = btn.querySelector('.moon-icon');

    if (theme === 'light') {
      btn.setAttribute('aria-label', 'Switch to dark mode');
      if (sunIcon) sunIcon.classList.add('hidden');
      if (moonIcon) moonIcon.classList.remove('hidden');
    } else {
      btn.setAttribute('aria-label', 'Switch to light mode');
      if (sunIcon) sunIcon.classList.remove('hidden');
      if (moonIcon) moonIcon.classList.add('hidden');
    }
  });
}

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

  function toggleMenu(open) {
    const isOpen = open !== undefined ? open : mobileMenu.classList.contains('hidden');

    if (isOpen) {
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('flex');
      if (menuOpenIcon) menuOpenIcon.classList.add('hidden');
      if (menuCloseIcon) menuCloseIcon.classList.remove('hidden');
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    } else {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
      if (menuOpenIcon) menuOpenIcon.classList.remove('hidden');
      if (menuCloseIcon) menuCloseIcon.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  menuBtn.addEventListener('click', () => toggleMenu());

  // Close menu on mobile nav link click
  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // Close menu on press Esc
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') toggleMenu(false);
  });

  // Reset overflow on screen resize
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      toggleMenu(false);
    }
  });
}

/**
 * Highlight active navigation link for the single-page layout.
 *
 * - IntersectionObserver watches all 6 sections and updates the active link
 *   as the user scrolls.
 * - Clicking a nav link activates it immediately (before scroll settles).
 * - URL hash on first load picks the correct starting link.
 */
function initActiveNav() {
  const navLinks = document.querySelectorAll('.nav-link');
  const allLinks = [...navLinks]; // mobile links also have .nav-link now

  // Map section id → the href value used in the nav
  const sectionMap = {
    home: '#home',
    about: '#about',
    skills: '#skills',
    services: '#services',
    projects: '#projects',
    contact: '#contact',
  };

  // ── Helper ───────────────────────────────────────────────────────────
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

  // ── Activate immediately on click ────────────────────────────────────
  allLinks.forEach((link) => {
    link.addEventListener('click', () => {
      setActive(link.getAttribute('href').toLowerCase());
    });
  });

  // ── Activate on first load based on URL hash ─────────────────────────
  const initialHash = window.location.hash.toLowerCase();
  if (initialHash && sectionMap[initialHash.replace('#', '')]) {
    setActive(initialHash);
  } else {
    setActive('#home');
  }

  // ── IntersectionObserver — scroll-based detection ────────────────────
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

/**
 * Interactive floating chat button
 */
function initChatButton() {
  const chatBtn = document.getElementById('chat-btn');
  if (!chatBtn) return;

  chatBtn.addEventListener('click', () => {
    // Smooth scroll to contact link or show quick toast notification
    const email = 'abhayganage01@gmail.com';
    window.location.href = `mailto:${email}?subject=Hello%20Abhay`;
  });
}
