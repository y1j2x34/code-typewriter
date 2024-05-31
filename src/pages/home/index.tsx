import { A } from '@solidjs/router';
import { For } from 'solid-js';
export default function Home() {
    const examples = [
        {
            path: '/js1k-magical-light-tunnel',
            name: 'Magical Light Tunnel',
        },
        {
            path: '/message-channel',
            name: 'Message Channel Example',
        },
        {
            path: '/broadcast-channel',
            name: 'Broadcast Channel Example',
        },
        {
            path: '/post-message',
            name: 'postMessage Example',
        },
        {
            path: '/storage-event',
            name: 'StorageEvent Example',
        },
    ];
    return (
        <>
            <For each={examples}>
                {it => {
                    return (
                        <A
                            href={it.path}
                            class="flex flex-col justify-center items-center rounded-lg w-60 h-60 border-2 border-solid bg-gradient-to-r from-cyan-500 to-blue-500 m-4"
                        >
                            <h6 class="h-10 text-2xl text-center">{it.name}</h6>
                        </A>
                    );
                }}
            </For>
        </>
    );
}
