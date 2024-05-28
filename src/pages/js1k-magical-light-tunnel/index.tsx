import { Frame } from '@/components/frame/Frame';
import { HighlightCode } from '@/components/highlight-code/HighlightCode';
import code from './code.txt?raw';

export default function Js1kMagicalLightTunnel() {
    let canvas: HTMLCanvasElement | undefined;
    return (
        <>
            <div class="flex-1">
                <canvas
                    ref={canvas}
                    width="900"
                    height="900"
                    class="border-solid border border-slate-50 bg-slate-950 mx-auto bg-[#000]"
                ></canvas>
            </div>
            <div class="flex-1 mt-1 p-10 w-full bg-[#000]">
                <div class="bg-[#A8B0C1] p-10">
                    <Frame title="Magical Light Tunnel.js" theme="light" class="w-[600px] mx-auto">
                        <HighlightCode
                            class="py-[21px] w-full max-h-96 min-h-96"
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
        </>
    );
}
