function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}
document.getElementById("saibaMais").addEventListener("click", function() {
    alert("Entre em contato com nossos especialistas para saber mais sobre projetos de energia geotérmica!");
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Sua mensagem foi enviada com sucesso. Entraremos em contato em breve!");
});