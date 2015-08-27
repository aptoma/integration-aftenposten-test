"use strict";

var Alf = require('alf');
var $ = Alf.dom;

module.exports = {
    selector: '.lp-widget-disqus',
    //selector: 'div',

    run: function (done) {

        var $this = this.$el;
        var shortname = $this.attr('shortname');
        var query = $this.attr('data-query');
        //$this.text('Kommentarer');

        var treshhold = 100;
        var skip = false;

        function openComments() {
            if (skip) {
                console.log('block it');
                return;
            }

            //console.log('Comments for: ' + shortname + ' ' + query);
            var url = 'http://lisa.aftenposten.no/aftenposten_pluss/stage/integration/disqus.html?shortname=' + shortname + '&identifier=' + query;
            window.location.href = url;

            skip = true;
            setTimeout(function() {
                skip = false;
            }, treshhold);

        }

        $this.on('tap', openComments);

        done();
    }
};
