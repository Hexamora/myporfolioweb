(() => {
const allowedKey = "OX48I-9x71A";
const params = new URLSearchParams(window.location.search);
const key = params.get("key");

const allow = () => {
    document.documentElement.style.display = "block";
};

const deny = () => {
    document.documentElement.innerHTML = `
    <head>
        <title>403 Forbidden</title>
    </head>
    <body style="margin:0;display:flex;justify-content:center;align-items:center;height:100vh;font-family:sans-serif;background:#0f172a;color:#fff">
        <div>
        <h1>403 Forbidden</h1>
        <p>Access denied.</p>
        </div>
    </body>
    `;
    throw new Error("Blocked");
};

if (key === allowedKey) {
    sessionStorage.setItem("access", "granted");
    allow();
} else if (sessionStorage.getItem("access") === "granted") {
    allow();
} else {
    deny();
}
})();
