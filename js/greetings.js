const loginForm = document.querySelector("#login-form")
const loginInput = loginForm.querySelector("input")
const loginButton = loginForm.querySelector("button")
const greeting = document.querySelector("#greeting")
// const logOut = document.querySelector(".logout")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"
// const link = document.querySelector("a")

function onLoginSubmit (event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const usernameThatTheUserWrote = loginInput.value;
    localStorage.setItem(USERNAME_KEY, usernameThatTheUserWrote);
    paintGreeting();
    }

// function handleLinkClick (event) {
//     event.preventDefault();
//     alert("clicked");
//     }

loginForm.addEventListener("submit" , onLoginSubmit);
// link.addEventListener("click", handleLinkClick);
// logOut.addEventListener("click", logout);

// function logout () {
//     localStorage.removeItem(USERNAME_KEY);
//     greeting.classList.add(HIDDEN_CLASSNAME);
//     loginForm.classList.remove(HIDDEN_CLASSNAME);
//     loginForm.addEventListener("submit", onLoginSubmit);
// }
function paintGreeting () {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting();
}

