function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}
document.getElementById("saibaMais").addEventListener("click", function() {
    alert("Descubra como implementar energia eólica em seu projeto. Fale com nossos especialistas!");
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Sua mensagem foi enviada com sucesso. Entraremos em contato em breve!");
});
