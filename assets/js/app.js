const chatArea = document.getElementById("chatArea");
const searchBtn = document.getElementById("searchBtn");
const userInput = document.getElementById("userInput");

let commands = [];
let laws = [];
let intros = [];

async function loadData() {

    try {

        const introsResponse =
            await fetch("data/intros.json");

        intros = await introsResponse.json();

    } catch (error) {

        console.error(error);

    }

}

loadData();

searchBtn.addEventListener("click", () => {

    sendMessage();

});

userInput.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        sendMessage();

    }

});

function sendMessage() {

    const text = userInput.value.trim();

    if (!text) return;

    addUserMessage(text);

    processQuestion(text);

    userInput.value = "";

}

function addUserMessage(text) {

    const div = document.createElement("div");

    div.className = "user-message";

    div.innerText = text;

    chatArea.appendChild(div);

}

function addBotMessage(html) {

    const div = document.createElement("div");

    div.className = "bot-message";

    div.innerHTML = html;

    chatArea.appendChild(div);

}
