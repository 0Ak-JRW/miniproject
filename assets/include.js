async function include(selector, url) {
    const host = document.querySelector(selector);
    if (!host) return;
    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) return console.error("Load failed:", url, res.status);
    host.innerHTML = await res.text();
}