"use strict";

var Alf = require('alf');
var $ = Alf.dom;
var trafficScript = 'http://www.aftenposten.no/resources/js/mno/utils/trafficfund_fif.js';

module.exports = {
    selector: '.banner-fullpage-phone',

    run: function(done){
        var container = this.container;

        container.$el.empty();

        var bannerUrl = 'http://a.adtech.de/addyn/3.0/1582.1/0/0/-1/ADTECH;loc=100;grp=[group];alias=SB_AftenpostenPluss_Mobile:Other:Helside;misc=';
        var url = bannerUrl + new Date().getTime();

        var phoneadwrapper = document.createElement('div');
        phoneadwrapper.className = 'phone-ad-wrap';
        var iframe = document.createElement('iframe');
        iframe.className = 'ad-iframe';
        iframe.scrolling = 'no';
        var html = '<head><style>img {max-width : 100%}</style></head><body marginwidth="0" marginheight="0" leftmargin="0" topmargin="0" rightmargin="0">'
            + '<scr' + 'ipt  src="' +
            url +
            '"></scri' + 'pt>' +
            '<scr' + 'ipt >;window.trafficfund_domain="aftenposten.no";</scri' + 'pt>' +
            '<scr' + 'ipt  src="' +
            trafficScript +
            '"></scri' + 'pt>' +
            '</body>';
        iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
        phoneadwrapper.appendChild(iframe);
        container.$el.append(phoneadwrapper);

        done();
    }
};
