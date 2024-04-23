import { type Component } from 'solid-js';
import { HighlightCode } from './components/highlight-code/HighlightCode';
import { Frame } from './components/frame/Frame';

export function App() {
    return (
        <div class="text-4xl text-green-700 text-center py-20">
            <div class="w-80 mx-auto">
                <Frame title="面向工资编程.js" theme="light">
                    <HighlightCode
                        class="py-[21px] w-full"
                        code={`export async function main() {
    const hasPermission = await requestForPermission();
    if (!hasPermission) {
        return;
    }
    const text = await navigator.clipboard.readText();
    console.log('从剪贴板读取的文本：', text);
    const clipboardItems = await navigator.clipboard.read();

    clipboardItems.forEach(item => {
        const blob = item.getType('image/png');
        console.log('从剪贴板读取到的图片：', blob);
    });
}

async function requestForPermission() {
    const queryOpts: PermissionDescriptor = {
        // @ts-ignore
        name: 'clipboard-read',
        allowWithoutGesture: true,
    };
    const { state } = await navigator.permissions.query(queryOpts);
    return state === 'granted';
}
                        `}
                        theme="base16/dracula"
                        language="javascript"
                        typewriter
                    ></HighlightCode>
                </Frame>
            </div>
        </div>
    );
}
