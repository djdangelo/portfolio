import './style.css';
import { I18nManager } from './core/I18nManager';
import { publicProjects, privateProjects, type Project } from './data/projects';

// Initialize I18n
const i18n = new I18nManager();

async function initApp() {
  await i18n.init();
  setupLanguageSwitcher();
  renderProjects();

  // Listen for locale changes to re-render dynamic content if needed
  window.addEventListener('localeChanged', () => {
    renderProjects();
    updateActiveLanguageButton();
  });
}

function updateActiveLanguageButton() {
  const current = i18n.getLocale();
  const btnEs = document.getElementById('btn-es');
  const btnEn = document.getElementById('btn-en');
  
  if (current === 'es') {
    btnEs?.classList.add('bg-brand-primary', 'text-white', 'font-medium');
    btnEs?.classList.remove('hover:text-brand-accent');
    btnEn?.classList.remove('bg-brand-primary', 'text-white', 'font-medium');
    btnEn?.classList.add('hover:text-brand-accent');
  } else {
    btnEn?.classList.add('bg-brand-primary', 'text-white', 'font-medium');
    btnEn?.classList.remove('hover:text-brand-accent');
    btnEs?.classList.remove('bg-brand-primary', 'text-white', 'font-medium');
    btnEs?.classList.add('hover:text-brand-accent');
  }
}

function setupLanguageSwitcher() {
  document.getElementById('btn-es')?.addEventListener('click', () => i18n.setLocale('es'));
  document.getElementById('btn-en')?.addEventListener('click', () => i18n.setLocale('en'));
  updateActiveLanguageButton();
}

function renderProjectCard(project: Project): string {
  const viewRepoText = i18n.t('projects.view_repo');
  const demoReqText = i18n.t('projects.demo_request');
  
  return `
    <div class="glass p-6 rounded-2xl glass-hover flex flex-col h-full">
      <div class="flex justify-between items-start mb-4">
        <h5 class="text-lg font-bold text-white">${project.name}</h5>
        <span class="text-xs px-2 py-1 rounded-full border ${project.isPrivate ? 'border-amber-500/30 text-amber-500 bg-amber-500/10' : 'border-green-500/30 text-green-500 bg-green-500/10'}">
          ${project.isPrivate ? 'Private' : 'Public'}
        </span>
      </div>
      <p class="text-gray-400 text-sm mb-6 flex-1">${project.description}</p>
      
      <div class="mt-auto">
        ${!project.isPrivate && project.url ? `
          <a href="${project.url}" target="_blank" class="inline-flex items-center text-sm text-brand-accent hover:text-brand-primary transition-colors">
            ${viewRepoText} <span class="ml-2">→</span>
          </a>
        ` : `
          <a href="mailto:dangelo_aguilar1998@hotmail.com?subject=Demo Request: ${project.name}" class="inline-flex items-center text-sm text-amber-500 hover:text-amber-400 transition-colors">
            ${demoReqText} <span class="ml-2">→</span>
          </a>
        `}
      </div>
    </div>
  `;
}

function renderProjects() {
  const publicContainer = document.getElementById('public-projects');
  const privateContainer = document.getElementById('private-projects');

  if (publicContainer) {
    publicContainer.innerHTML = publicProjects.map(renderProjectCard).join('');
  }
  
  if (privateContainer) {
    privateContainer.innerHTML = privateProjects.map(renderProjectCard).join('');
  }
}

// Start application
initApp();
