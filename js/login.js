document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".login-form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const feedbackMessage = document.getElementById("feedbackMessage");
    const feedbackText = feedbackMessage.querySelector("p");
    const closeButton = feedbackMessage.querySelector("button");

    // erro
    function showError(message) {
        feedbackText.textContent = message;
        feedbackMessage.classList.add("show");
        closeButton.focus(); // Acessibilidade
    }

    function hideError() {
        feedbackMessage.classList.remove("show");
    }

    // Ouvinte de clique no btn de fechar
    closeButton.addEventListener("click", hideError);

    // esc
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && feedbackMessage.classList.contains("show")) {
            hideError();
        }
    });

    // Val ao enviar
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Impede envio automático

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (email === "") {
            showError("Por favor, preencha o seu e-mail.");
            emailInput.focus();
            return;
        }

        if (password === "") {
            showError("Por favor, preencha a sua senha.");
            passwordInput.focus();
            return;
        }

        // se n tiver problema
        hideError();
        alert("Login efetuado com sucesso!");
    });
});
