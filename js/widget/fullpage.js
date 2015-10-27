"use strict";

var Alf = require('alf');
var $ = Alf.dom;
var trafficScript = 'http://www.aftenposten.no/resources/js/mno/utils/trafficfund_fif.js';

module.exports = {
    selector: '.banner-fullpage',

    run: function(done){
        var container = this.container;

        container.$el.empty();

        var bannerUrl = 'http://adserver.adtech.de/addyn|3.0|1582.1|5843763|0|3725|ADTECH;cookie=info;alias=SB_AftenpostenPluss_Tablet:Other:Helside;loc=100;target=_blank;grp=[group];misc=';
        var url = bannerUrl + new Date().getTime();

        var iframe = document.createElement('iframe');
        iframe.className = 'ad-iframe';
        iframe.seamless = 'seamless';
        iframe.scrolling='no';
        var html = '<body marginwidth="0" marginheight="0" leftmargin="0" topmargin="0" rightmargin="0">'+
            '<scr'+'ipt  src="' +
            url +
            '"></scri'+'pt>'+
            '<scr'+'ipt >;window.trafficfund_domain="aftenposten.no";</scri'+'pt>'+
            '<scr'+'ipt  src="' +
            trafficScript +
            '"></scri'+'pt>'+
            '</body>';

        iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
        container.$el.append(iframe);

        done();
    }
};

