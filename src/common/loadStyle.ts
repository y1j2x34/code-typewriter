import { ThemeName } from '@/highlight/theme-names';

const LOADED = new Map<string, HTMLLinkElement>();

export function loadStyleLink(url: string) {
    if (LOADED.has(url)) {
        return;
    }
    LOADED.forEach(it => it.remove());
    LOADED.clear();
    const link = document.createElement('link');
    LOADED.set(url, link);
    link.rel = 'stylesheet';
    link.href = url;
    document.head.append(link);
}
