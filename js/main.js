import { toggles, linkedHeadings } from './selectors.js';
import { Toggle } from './modules/nav-toggle.js';
import { headerShift, stickyToggle } from './modules/header.js';
import './modules/section-selector.js';
import './modules/accessibility.js';
import './modules/link-copy.js';
import { addToPageNav, createLinked, copyLink } from './modules/page-nav.js';
import { autoLinkedHeadings, pageNav } from './selectors.js';
import './pages/pages.js';

function init() {

  stickyToggle();
  window.addEventListener('scroll', stickyToggle);
  headerShift();

  toggles.forEach(tog => Toggle(tog));

  // Content Page Nav
  
  if (autoLinkedHeadings.length) {
    autoLinkedHeadings.forEach(h2 => {
      pageNav && addToPageNav(h2);
      createLinked(h2);
    });
  }

  linkedHeadings && linkedHeadings.forEach(link => {
    link.addEventListener('click', copyLink);
  })

}

document.addEventListener('DOMContentLoaded', init);