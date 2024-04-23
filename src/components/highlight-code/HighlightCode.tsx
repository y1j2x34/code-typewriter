import { loadLanguageScript } from '@/highlight/language-script';
import { LanguageType } from '@/highlight/language-types';
import { loadTheme } from '@/highlight/theme-link';
import { ThemeName } from '@/highlight/theme-names';
import hljs from 'highlight.js';
import { createEffect, createSignal, on } from 'solid-js';
import Typed from 'typed.js';

(window as any).hljs = hljs;

export type HighlightCodeProps = {
    code: string;
    theme: ThemeName;
    language: LanguageType;
    typewriter?: boolean | {};
    class?: string;
};

export function HighlightCode(props: HighlightCodeProps) {
    const [highlightCode, setHighlightCode] = createSignal('');
    let codeElement: HTMLElement | undefined;
    createEffect(
        on(
            () => [props.language, props.code],
            async ([language, code]) => {
                await loadLanguageScript(language as LanguageType);
                const result = hljs.highlight(code || '', {
                    language: language!,
                });
                setHighlightCode(result.value);
            }
        )
    );
    createEffect(() => {
        loadTheme(props.theme);
    });
    createEffect(() => {
        if (!props.typewriter) {
            return;
        }
        if (!props.code) {
            return;
        }
        if (!codeElement) {
            return;
        }
        const code = highlightCode();
        if (!code) {
            return;
        }
        const type = new Typed(codeElement, {
            strings: [code],
            fadeOut: true,
            typeSpeed: 10,
            smartBackspace: true,
        });
        return () => {
            type.destroy();
        };
    });
    return (
        <pre
            class={`${props.class || ''} theme-${props.theme.replace('/', '-')} text-sm relative overflow-hidden max-w-full hljs`}
        >
            <div class="mb-0 p-4 block min-h-full overflow-auto">
                <code ref={codeElement}></code>
            </div>
        </pre>
    );
}
