$(document).ready(function() {
    // fullpage js
    $('#fullpage').fullpage({
    licenseKey: 'gplv3-license',
    navigation: true,
    navigationTooltips: ["Welcome", "New Robots", "Used Robots", "Contact"] 
    });

    //typewriterjs
    var typewriterElements = document.querySelectorAll('.typewriter-effect')
    console.log(typewriterElements)
    for (var i = 0; i < typewriterElements.length; i++){
        var currentEl = typewriterElements[i]
        var innerText = currentEl.innerText

        new Typewriter(currentEl, {
            loop: true,
        })

        .typeString(innerText)
        .pauseFor(820)
        .start()
    }
});