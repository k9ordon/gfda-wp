var webpage = require('webpage');

function getScreen(from, to) {
    console.log('getScreen', from);

    page = webpage.create();

    page.viewportSize = { width: 1366, height: 768 };
    page.open('http://duro/gfda-wp/gfda.html#' + from, function (){
        
        page.render('screens/gfda-render-' + from + '.png');
    
        if(from < to) {
            getScreen(from + 1, to);
        } else {
            phantom.exit();
        }
    });
}

getScreen(1,100);