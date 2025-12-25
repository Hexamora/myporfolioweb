(() => {
const allowedKey = "OX48I-9x71A";
const params = new URLSearchParams(window.location.search);
const key = params.get("key");

if (key === allowedKey) {
    sessionStorage.setItem("access", "granted");
}

if (sessionStorage.getItem("access") !== "granted") {
    document.body.innerHTML = "<h1>403 Forbidden</h1>";
}
})();
