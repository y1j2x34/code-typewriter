import { ThemeName } from './theme-names';
import { HighlightJsVersion } from './version';
import { loadStyleLink } from '@/common/loadStyle';

export function getThemeLink(style: ThemeName) {
    return `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${HighlightJsVersion}/styles/${style}.min.css`;
}
export function loadTheme(theme: ThemeName) {
    const url = getThemeLink(theme);
    loadStyleLink(url);
}
