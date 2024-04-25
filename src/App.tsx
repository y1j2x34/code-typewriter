import { HighlightCode } from './components/highlight-code/HighlightCode';
import { Frame } from './components/frame/Frame';
import code from './1kjs.txt?raw';
import { getOwner, onCleanup, runWithOwner } from 'solid-js';
import { ArgumentsType } from 'vitest';
console.log(code);

export function App() {
    let canvas: HTMLCanvasElement | undefined;
    const owner = getOwner();

    function setInterval(...args: ArgumentsType<typeof window.setInterval>) {
        const timmerId = window.setInterval(...args);
        runWithOwner(owner, () => {
            onCleanup(() => {
                clearInterval(timmerId);
            });
        });
    }
    return (
        <div class="text-4xl text-green-700 text-center py-10 w-[900px] mx-auto flex flex-col">
            <div class="flex-1">
                <canvas
                    ref={canvas}
                    width="900"
                    height="900"
                    class="border-solid border border-slate-50 bg-slate-950"
                ></canvas>
            </div>
            <div class="flex-1 w-full mt-10">
                <Frame title="Magical Light Tunnel.js" theme="light">
                    <HighlightCode
                        class="py-[21px] w-full"
                        code={code}
                        theme="base16/dracula"
                        language="javascript"
                        typewriter={{
                            onComplete: () => {
                                new Function('c', 'a', 'setInterval', code)(
                                    canvas?.getContext('2d'),
                                    canvas,
                                    setInterval
                                );
                            },
                        }}
                    ></HighlightCode>
                </Frame>
            </div>
        </div>
    );
}
