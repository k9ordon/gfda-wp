var webpage = require('webpage');
var fs = require("fs");

var lastGfda = 225;
//var lastGfda = 3;

function getAdvices(from, to) {
    console.log('getAdvices', from, to);

    page = webpage.create();
    page.open('http://www.goodfuckingdesignadvice.com/advice/' + from, function (){
        var data = page.evaluate(function () {
            return {
                id: document.querySelector('.id').innerText.replace(/[^0-9]/g, ""),
                text: document.querySelector('h1').innerText,
                html: document.querySelector('h1').innerHTML
            }
        });

        var file = fs.open("advices.txt", "a");
        file.write(data.id + ' : ' + JSON.stringify(data) + ', \n');
        file.close();

        console.log(JSON.stringify(data));

        if(from < to) {
            getAdvices(from+1, to);
        } else {
            phantom.exit();
        }
    });
}

getAdvices(1, lastGfda);