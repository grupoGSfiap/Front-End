function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtém os valores do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Valida os dados (exemplo básico)
    if (name && email && subject && message) {
        document.getElementById('feedback').textContent = "Mensagem enviada com sucesso!";
        this.reset(); // Limpa o formulário
    } else {
        document.getElementById('feedback').textContent = "Por favor, preencha todos os campos.";
        document.getElementById('feedback').style.color = 'red';
    }
});
