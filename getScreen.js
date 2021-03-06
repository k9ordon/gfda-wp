var webpage = require('webpage');

function getScreen(from, to) {
    console.log('getScreen', from);

    page = webpage.create();

    page.viewportSize = { width: 1366, height: 768 };
    page.viewportSize = { width: 1920, height: 1200 };
    page.viewportSize = { width: 1440, height: 2560 };
    page.open('http://duro/gfda-wp/gfda.html#' + from, function (){
        
        page.render('screens/gfda-render-' + page.viewportSize.width + 'x' + page.viewportSize.height + '/gfda-render-' + page.viewportSize.width + 'x' + page.viewportSize.height + '-' + from + '.png');
    
        if(from < to) {
            getScreen(from + 1, to);
        } else {
            phantom.exit();
        }
    });
}

getScreen(1,2);
