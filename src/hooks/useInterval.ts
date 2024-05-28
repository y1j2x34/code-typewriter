import { getOwner, onCleanup, runWithOwner } from 'solid-js';

export function useInterval() {
    const owner = getOwner();
    return function (...args: ArgumentsType<typeof window.setInterval>) {
        const timmerId = window.setInterval(...args);
        runWithOwner(owner, () => {
            onCleanup(() => {
                clearInterval(timmerId);
            });
        });
    };
}
