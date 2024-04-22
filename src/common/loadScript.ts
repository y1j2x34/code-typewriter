const LOADED = new Set<string>();

export function loadScript(url: string) {
    if (LOADED.has(url)) {
        return;
    }
    const script = document.createElement('script');
    return new Promise((resolve, reject) => {
        script.addEventListener('load', () => {
            resolve(true);
        });
        script.addEventListener('error', reject);
        script.src = url;
        document.body.append(script);
    });
}
