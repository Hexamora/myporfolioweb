if (sessionStorage.getItem("access") !== "granted") {
throw new Error("Blocked");
}

document.addEventListener("contextmenu", e => {
if (e.target.tagName === "IMG") e.preventDefault();
});
