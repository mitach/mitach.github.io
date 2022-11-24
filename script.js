import { showHomeScreen } from "./src/scripts/homeScreen.js";

showHomeScreen();

const params = new URLSearchParams(window.location.search);
const count = params.get('count');

console.log(count)

document.body.addEventListener('keydown', (e) => {
    console.log(e.key)
});