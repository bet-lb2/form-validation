import "./styles.css";
import { displayHomePage } from "./home";
import { displayMenuPage } from "./menu";
import { displayContactPage } from "./contact";

const content = document.getElementById("content");
const home = document.getElementById("home");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");

content.append(displayHomePage());

home.addEventListener("click", () => {
    content.innerHTML = "";
    content.append(displayHomePage());
});

menu.addEventListener("click", () => {
    content.innerHTML = "";
    content.append(displayMenuPage());
})

contact.addEventListener("click", () => {
    content.innerHTML = "";
    content.append(displayContactPage());
})