class UserData {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.date = new Date().toLocaleString();
    }

    printToConsole() {
        console.log("Данные нового пользователя");
        console.log(`Имя: ${this.username}`);
        console.log(`Почта: ${this.email}`);
        console.log(`Пароль: ${this.password}`);
        console.log(`Время регистрации ${this.date}`);
    }
}

const regForm = document.getElementById("form");
const submitButton = document.getElementById("submit-btn");

if(regForm) {
    regForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const newUser = new UserData(username, email, password);

    newUser.printToConsole();

    window.location.href = "main_screen.html";
});
}


const authForm = document.getElementById("auth-form");

if (authForm) {
    authForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const user = new UserData(username, "", password);

        user.printToConsole();

        window.location.href = "main_screen.html";
    });
}