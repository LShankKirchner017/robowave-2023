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

    //power glitch
    PowerGlitch.glitch('.glitch', {
        hideOverflow: true
    })

    // last error date
  $('[data-lastErrorDate]').each(function(){ 
    // get date form data-LastErrorDate
    var errDate = $(this).attr("data-lastErrorDate")
    errDate = dayjs(errDate)
    // turn date into dayjs object
    console.log(errDate)
    // get the today's date as a dayjs object
    var today = dayjs()
    //find difference in days between days

    // if the diff < 5 
        //text-danger
    // if the diff is <30
        //text-warning
    //else
        //text-success
    
    //set the text of p
            //add class
  })
});