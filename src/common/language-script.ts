import { loadScript } from '@/common/loadScript';
import { LanguageType } from './language-types';
import { HighlightJsVersion } from '../highlight/version';

export function getLanguageScript(language: LanguageType) {
    return `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${HighlightJsVersion}/languages/${language}.min.js`;
}

export function loadLanguageScript(language: LanguageType) {
    const url = getLanguageScript(language);
    return loadScript(url);
}
