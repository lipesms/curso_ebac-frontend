$(document).ready(function() {

    let textToType = "Seu próximo passo no mundo da programação começa hoje";

    let typingElement = $('.chamada');
    let cursorElement = $('.cursor');

    function typeText(index) {
        if (index <= textToType.length) {
        typingElement.text(textToType.substring(0, index));
        setTimeout(function() {
            typeText(index + 1);
        }, 70); 
        } else {
        cursorElement.css("display", "inline-block"); 
        }
    }

    typeText(0);

});