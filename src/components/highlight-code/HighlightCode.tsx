import { loadLanguageScript } from '@/common/language-script';
import { LanguageType } from '@/common/language-types';
import { loadTheme } from '@/highlight/theme-link';
import { ThemeName } from '@/highlight/theme-names';
import hljs from 'highlight.js';
import { createEffect, createSignal, on } from 'solid-js';
import Typed, { TypedOptions } from 'typed.js';

(window as any).hljs = hljs;

export type HighlightCodeProps = {
    code: string;
    theme: ThemeName;
    language: LanguageType;
    typewriter?: boolean | TypedOptions;
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
        const userOptions = typeof props.typewriter === 'boolean' ? {} : props.typewriter;
        const type = new Typed(codeElement, {
            fadeOut: true,
            typeSpeed: 1,
            smartBackspace: true,
            ...userOptions,
            strings: [code],
        });
        return () => {
            type.destroy();
        };
    });
    return (
        <pre
            class={`${props.class || ''} theme-${props.theme.replace('/', '-')} text-sm relative overflow-hidden max-w-full hljs`}
        >
            <div class="mb-0 p-4 block min-h-full overflow-auto relative">
                <code
                    ref={codeElement}
                    class=" whitespace-pre-wrap break-all overflow-hidden block max-w-full h-full"
                ></code>
            </div>
        </pre>
    );
}
