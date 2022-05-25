$(function() {
    $("#header").load("header.html");
});

function openAbt() {
    $('#about').load("about.html");
}

function closeAbt() {
    $('#about').empty("about.html");
}