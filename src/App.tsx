import { type Component } from 'solid-js';
import { HighlightCode } from './components/highlight-code/HighlightCode';

export function App() {
    return (
        <div class="text-4xl text-green-700 text-center py-20">
            <HighlightCode
                code={`console.log('hello world');`}
                theme="base16/woodland"
                language="javascript"
                typewriter
            ></HighlightCode>
        </div>
    );
}
