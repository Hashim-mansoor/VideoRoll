const WEBSITE_BASE_URL = "https://videoroll.app";

export function getWebsiteBaseUrl(): string {
  return WEBSITE_BASE_URL;
}

export function getWebsiteUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${WEBSITE_BASE_URL}${p}`;
}

export function getWebsiteLocale(): string {
  return chrome.i18n.getUILanguage().includes("zh") ? "zh" : "en";
}
