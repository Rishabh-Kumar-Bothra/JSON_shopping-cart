//created by geekychaser

var catalog = [];
var cart = {};

function getCatalog(done) {
    $.getJSON('data/data.json', function (data) {
        catalog = data;
        done();
    })
}

function addToCart() {
    
}