import { createApp } from "vue";
import APP from "./app.vue";
import "./main.css";

const container = document.createElement("div");
container.id = "test-app-extension";
document.body.appendChild(container);
document.body.style.position = "relative";
container.style.position = "fixed";
container.style.top = "100px";
container.style.right = "40px";


createApp(APP).mount("#test-app-extension");