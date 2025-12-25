(() => {
const allowedKey = "OX48I-9x71A";
const params = new URLSearchParams(window.location.search);
const key = params.get("key");

if (key === allowedKey) {
    sessionStorage.setItem("access", "granted");
}

if (sessionStorage.getItem("access") !== "granted") {
    document.documentElement.innerHTML = `
    <head>
        <title>403 Forbidden</title>
    </head>
    <body style="font-family:sans-serif;text-align:center;padding:50px">
        <h1>403 Forbidden</h1>
        <p>Access denied.</p>
    </body>
    `;
    throw new Error("Access blocked");
}
})();
