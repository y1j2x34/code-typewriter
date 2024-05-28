import { A } from '@solidjs/router';
import { For } from 'solid-js';
export default function Home() {
    const examples = [
        {
            path: '/js1k-magical-light-tunnel',
            name: 'Magical Light Tunnel',
        },
        {
            path: '/communication',
            name: 'Communication',
        },
    ];
    return (
        <>
            <For each={examples}>
                {it => {
                    return (
                        <A
                            href={it.path}
                            class="flex flex-col rounded-lg w-60 h-60 border-2 border-solid bg-gradient-to-r from-cyan-500 to-blue-500"
                        >
                            <h6 class="h-10 text-2xl text-center">{it.name}</h6>
                        </A>
                    );
                }}
            </For>
        </>
    );
}
