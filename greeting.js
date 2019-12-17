const g_userNameForm = document.querySelector(".js-form");
const g_userNameInput = g_userNameForm.querySelector("input");
const g_greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser", SHOWING_CN = "showing";

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        g_userNameForm.remove();
        paintGreeting(currentUser);
    }
}

function paintGreeting(text) {
    const date = new Date();
    const time = date.getHours();
    let greetingWord = "";
    
    if (time < 7) {
        greetingWord = "Good day";
    } else if (time < 10) {
        greetingWord = "Good morning";
    } else if (time < 18) {
        greetingWord = "Good afternoon";
    } else {
        greetingWord = "Good evening";
    }

    g_userNameForm.classList.remove(SHOWING_CN);
    g_greeting.classList.add(SHOWING_CN);
    g_greeting.innerText = `${greetingWord}, ${text}`;
}

function askForName() {
    g_userNameForm.classList.add(SHOWING_CN);
    g_userNameForm.addEventListener("submit", handleSummit);
}

function handleSummit(event) {
    event.preventDefault();
    const currentValue = g_userNameInput.value;
    g_userNameForm.remove();
    saveName(currentValue);
    paintGreeting(currentValue);
}

function saveName(name) {
    localStorage.setItem(USER_LS, name);
}

function init() {
    loadName();
}

init();