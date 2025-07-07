document.addEventListener("DOMContentLoaded", function() {

    const loadComponent = (selector, url) => {
        fetch(url)
            .then(response => response.ok ? response.text() : Promise.reject('Arquivo não encontrado'))
            .then(data => {
                document.querySelector(selector).innerHTML = data;
            })
            .catch(error => console.error(`Erro ao carregar o componente: ${error}`));
    };

    loadComponent("#footer-placeholder", "/html/_footer.html");

    loadComponent("#header-placeholder", "/html/_header.html");
});