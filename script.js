$(function() {
    $("#header").load("/scripts/header.html");
});

function openAbt() {
    $('#about').load("/scripts/about.html");
}

function closeAbt() {
    $('#about').empty("/scripts/about.html");
}
$(function() {
    $("#footer").load("/scripts/footer.html");
});