(() => {
const allowedKey = "OX48I-9x71A";
const params = new URLSearchParams(window.location.search);
const key = params.get("key");

const allow = () => {
    document.documentElement.style.display = "block";
    document.body.style.display = "block";
};

const deny = () => {
    document.open();
    document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>403 Forbidden</title>
        <style>
        body {
            margin: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #020617;
            color: #fff;
            font-family: system-ui, sans-serif;
        }
        </style>
    </head>
    <body>
        <div>
        <h1>403 Forbidden</h1>
        <p>Access denied.</p>
        </div>
    </body>
    </html>
    `);
    document.close();

    // HARD STOP
    throw new Error("ACCESS BLOCKED");
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
