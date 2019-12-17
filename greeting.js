const userNameForm = document.querySelector(".js-form");
const userNameInput = userNameForm.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser", SHOWING_CN = "showing";

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        userNameForm.remove();
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

    userNameForm.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `${greetingWord}, ${text}`;
}

function askForName() {
    userNameForm.classList.add(SHOWING_CN);
    userNameForm.addEventListener("submit", handleSummit);
}

function handleSummit(event) {
    event.preventDefault();
    const currentValue = userNameInput.value;
    userNameForm.remove();
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