/**
 * Summary: This script is used to load the JSON file with the translations
 */
document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.lang-toggle');

  toggles.forEach((toggle) => {
    initializeLanguage(toggle);
    toggle.addEventListener('change', handleLanguageToggle);
  });
});

/**
 * @summary This function loads the JSON file with the translations
 * @param {string} lang - The language to be loaded
 * @returns {Promise<void>} - A promise that resolves when the language is loaded
 * @throws {Error} - Throws an error if the JSON file cannot be fetched
 * @author Gonzalo Quedena
 */
async function loadLanguage(lang) {
  try {
    const response = await fetch(`assets/i18n/${lang}.json`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    updateContent(data);
    history.pushState({}, '', `?lang=${lang}`);
  } catch (error) {
    console.error('Error fetching JSON:', error);
  }
}

/**
 * @summary This function gets the initial language to be loaded
 * @param {HTMLElement} toggle - The toggle button to get the initial language
 * @returns {string} - The initial language to be loaded
 * @author Gonzalo Quedena
 */
function getInitialLanguage(toggle) {
  return toggle.checked ? 'es' : 'en';
}

/**
 * @summary This function initializes the language to be loaded
 * @param {HTMLElement} toggle - The toggle button to initialize the language
 * @author Gonzalo Quedena
 */
function initializeLanguage(toggle) {
  const initialLang = getInitialLanguage(toggle);
  loadLanguage(initialLang);
}

/**
 * @summary This function handles the language toggle
 * @param {Event} event - The event to handle the language toggle
 * @author Gonzalo Quedena
 */
function handleLanguageToggle(event) {
  const toggle = event.target;
  const lang = toggle.checked ? 'es' : 'en';

  loadLanguage(lang);
}

/**
 * @summary This function updates the navbar with the translated content
 * @param {Object} navbar - The object containing the translated content for the navbar
 * @author Gonzalo Quedena
 */
function updateNavbar(navbar) {
  document.querySelectorAll('.dropdown__span').forEach((text) => {
    text.textContent = navbar.language;
  });
  document.querySelectorAll('.nav__link-about-me').forEach((text) => {
    text.textContent = navbar.aboutMe;
  });
  document.querySelectorAll('.nav__link-contact').forEach((text) => {
    text.textContent = navbar.contact;
  });
}

/**
 * @summary This function updates the hero section with the translated content
 * @param {Object} hero - The object containing the translated content for the hero section
 * @author Gonzalo Quedena
 */
function updateHeroSection(hero) {
  document.querySelector('.hero__subtitle').textContent = hero.subtitle;
  document.querySelector('.hero__button').textContent = hero.button;
}

/**
 * @summary This function updates the about me section with the translated content
 * @param {Object} aboutMe - The object containing the translated content for the about me section
 * @author Gonzalo Quedena
 */
function updateAboutMeSection(aboutMe) {
  document.querySelector('.about-me__title-first').textContent = aboutMe.aboutMe.title;
  document.querySelector('.about-me__description').textContent = aboutMe.aboutMe.description;

  document.querySelector('.about-me__title-second').textContent = aboutMe.education.title;
  document.querySelector('.about-me__education').textContent = aboutMe.education.career;
  document.querySelector('.about-me__university').textContent = aboutMe.education.university;

  document.querySelector('.about-me__title-tech').textContent = aboutMe.techStack.title;
  document.querySelector('.tech__button-language').textContent = aboutMe.techStack.buttons.languages;
  document.querySelector('.tech__button-framework').textContent = aboutMe.techStack.buttons.frameworks;
}

/**
 * @summary This function updates the projects section with the translated content
 * @param {Object} projects - The object containing the translated content for the projects section
 * @author Gonzalo Quedena
 */
function updateProjectsSection(projects) {
  document.querySelector('.projects__title').textContent = projects.title;
  document.querySelector('.projects__description').textContent = projects.description;
}

/**
 * @summary This function updates the footer section with the translated content
 * @param {Object} footer - The object containing the translated content for the footer section
 * @author Gonzalo Quedena
 */
function updateFooterSection(footer) {
  document.querySelector('.footer__copy').textContent = footer.copy;
  document.querySelector('.footer__button').textContent = footer.button;
}

/**
 * @summary This function updates the content of the page with the translated content
 * @param {Object} data - The object containing the translated content for the entire page
 * @author Gonzalo Quedena
 */
function updateContent(data) {
  updateNavbar(data.nav);
  updateHeroSection(data.hero);
  updateAboutMeSection(data.aboutMe);
  updateProjectsSection(data.projects);
  updateFooterSection(data.footer);
}