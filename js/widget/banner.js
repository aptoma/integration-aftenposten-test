"use strict";

var Alf = require('alf');
var $ = Alf.dom;
var trafficScript = 'http://www.aftenposten.no/resources/js/mno/utils/trafficfund_fif.js';

module.exports = {
    selector: '.banner-fullwidth',

    run: function (done) {
        var container = this.container;
        var sectionName = container.$el.find(":first-child").attr("data-section");

        container.$el.empty();

        if(sectionName === 'dødsfall') {
            done();
            return;
        }

        var banners = {
            "nyheter": [
                'http://adserver.adtech.de/addyn|3.0|1582.1|5509585|0|1744|ADTECH;cookie=info;alias=SB_AftenpostenPluss_Tablet:Nyheter:TopBoard;loc=100;target=_blank;key=key1+key2+key3+key4;grp=[group];misc=',
                'http://adserver.adtech.de/addyn|3.0|1582.1|5509596|0|1744|ADTECH;cookie=info;alias=SB_AftenpostenPluss_Tablet:Nyheter:SuperBoard1;loc=100;target=_blank;key=key1+key2+key3+key4;grp=[group];misc='
            ],
            "økonomi": [
                'http://adserver.adtech.de/addyn|3.0|1582.1|5509586|0|1744|ADTECH;cookie=info;alias=SB_AftenpostenPluss_Tablet:Okonomi:SuperBoard1;loc=100;target=_blank;key=key1+key2+key3+key4;grp=[group];misc=',
                'http://adserver.adtech.de/addyn|3.0|1582.1|5509598|0|1744|ADTECH;cookie=info;alias=SB_AftenpostenPluss_Tablet:Okonomi:TopBoard;loc=100;target=_blank;key=key1+key2+key3+key4;grp=[group];misc='
            ],
            "osloby": [
                'http://adserver.adtech.de/addyn|3.0|1582.1|5509587|0|1744|ADTECH;cookie=info;alias=SB_AftenpostenPluss_Tablet:Osloby:TopBoard;loc=100;target=_blank;key=key1+key2+key3+key4;grp=[group];misc=',
                'http://adserver.adtech.de/addyn|3.0|1582.1|5509588|0|1744|ADTECH;cookie=info;alias=SB_AftenpostenPluss_Tablet:Osloby:SuperBoard1;loc=100;target=_blank;key=key1+key2+key3+key4;grp=[group];misc='
            ],
            "reise": [
                'http://adserver.adtech.de/addyn|3.0|1582.1|5509589|0|1744|ADTECH;cookie=info;alias=SB_AftenpostenPluss_Tablet:Reise:SuperBoard1;loc=100;target=_blank;key=key1+key2+key3+key4;grp=[group];misc=',
                'http://adserver.adtech.de/addyn|3.0|1582.1|5509592|0|1744|ADTECH;cookie=info;alias=SB_AftenpostenPluss_Tablet:Reise:TopBoard;loc=100;target=_blank;key=key1+key2+key3+key4;grp=[group];misc='
            ],
            "bil": [
                'http://adserver.adtech.de/addyn|3.0|1582.1|5509591|0|1744|ADTECH;cookie=info;alias=SB_AftenpostenPluss_Tablet:Bil:SuperBoard1;loc=100;target=_blank;key=key1+key2+key3+key4;grp=[group];misc=',
                'http://adserver.adtech.de/addyn|3.0|1582.1|5509593|0|1744|ADTECH;cookie=info;alias=SB_AftenpostenPluss_Tablet:Bil:TopBoard;loc=100;target=_blank;key=key1+key2+key3+key4;grp=[group];misc='
            ],
            "sport": [
                'http://adserver.adtech.de/addyn|3.0|1582.1|5509594|0|1744|ADTECH;cookie=info;alias=SB_AftenpostenPluss_Tablet:Sport:TopBoard;loc=100;target=_blank;key=key1+key2+key3+key4;grp=[group];misc=',
                'http://adserver.adtech.de/addyn|3.0|1582.1|5509597|0|1744|ADTECH;cookie=info;alias=SB_AftenpostenPluss_Tablet:Sport:SuperBoard1;loc=100;target=_blank;key=key1+key2+key3+key4;grp=[group];misc='
            ],
            "kultur": [
                'http://adserver.adtech.de/addyn|3.0|1582.1|5509595|0|1744|ADTECH;cookie=info;alias=SB_AftenpostenPluss_Tablet:Kultur:TopBoard;loc=100;target=_blank;key=key1+key2+key3+key4;grp=[group];misc=',
                'http://adserver.adtech.de/addyn|3.0|1582.1|5509601|0|1744|ADTECH;cookie=info;alias=SB_AftenpostenPluss_Tablet:Kultur:SuperBoard1;loc=100;target=_blank;key=key1+key2+key3+key4;grp=[group];misc='
            ],
            "bolig": [
                'http://adserver.adtech.de/addyn|3.0|1582.1|5616303|0|1744|ADTECH;cookie=info;alias=SB_AftenpostenPluss_Tablet:Bolig:TopBoard;loc=100;target=_blank;grp=[group];misc=',
                'http://adserver.adtech.de/addyn|3.0|1582.1|5616302|0|1744|ADTECH;cookie=info;alias=SB_AftenpostenPluss_Tablet:Bolig:SuperBoard1;loc=100;target=_blank;grp=[group];misc='
            ],
            "other": [
                'http://adserver.adtech.de/addyn|3.0|1582.1|5509590|0|1744|ADTECH;cookie=info;alias=SB_AftenpostenPluss_Tablet:Other:TopBoard;loc=100;target=_blank;key=key1+key2+key3+key4;grp=[group];misc=',
                'http://adserver.adtech.de/addyn|3.0|1582.1|5509600|0|1744|ADTECH;cookie=info;alias=SB_AftenpostenPluss_Tablet:Other:SuperBoard1;loc=100;target=_blank;key=key1+key2+key3+key4;grp=[group];misc='
            ]
        }

        var sectionBanners = banners[sectionName] || banners['other'];

        var randomBanner = Math.floor(Math.random()*sectionBanners.length);
        var url = sectionBanners[randomBanner] + new Date().getTime();

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
