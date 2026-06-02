export class I18nManager {
  private currentLocale: string = 'es';
  private translations: Record<string, any> = {};

  constructor() {
    const savedLocale = localStorage.getItem('locale');
    if (savedLocale) {
      this.currentLocale = savedLocale;
    } else {
      const browserLang = navigator.language.split('-')[0];
      this.currentLocale = browserLang === 'en' ? 'en' : 'es';
    }
  }

  public async init() {
    await this.loadTranslations(this.currentLocale);
    this.updateDOM();
  }

  public async setLocale(locale: string) {
    if (this.currentLocale === locale) return;
    this.currentLocale = locale;
    localStorage.setItem('locale', locale);
    await this.loadTranslations(locale);
    this.updateDOM();
    
    window.dispatchEvent(new CustomEvent('localeChanged', { detail: { locale } }));
  }

  public getLocale(): string {
    return this.currentLocale;
  }

  public t(key: string): string {
    const keys = key.split('.');
    let value: any = this.translations;
    for (const k of keys) {
      if (value[k] === undefined) {
        return key;
      }
      value = value[k];
    }
    return value as string;
  }

  private async loadTranslations(locale: string) {
    try {
      const response = await fetch(`./locales/${locale}.json`);
      if (!response.ok) {
        throw new Error(`Could not load translations for ${locale}`);
      }
      this.translations = await response.json();
    } catch (error) {
      console.error('Error loading translations:', error);
    }
  }

  public updateDOM() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (key) {
        const translation = this.t(key);
        if (translation && translation !== key) {
          el.textContent = translation;
        }
      }
    });
  }
}
