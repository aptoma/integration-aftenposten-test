"use strict";

var Alf = require('alf');
var $ = Alf.dom;
var trafficScript = 'http://www.aftenposten.no/resources/js/mno/utils/trafficfund_fif.js';

module.exports = {
    selector: '.phone-banner',

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
                'http://a.adtech.de/addyn/3.0/1582.1/0/0/-1/ADTECH;loc=100;grp=%5Bgroup%5D;alias=SB_AftenpostenPluss_Mobile:Nyheter:TopBoard;misc=',
                'http://a.adtech.de/addyn/3.0/1582.1/0/0/-1/ADTECH;loc=100;grp=%5Bgroup%5D;alias=SB_AftenpostenPluss_Mobile:Nyheter:NetBoard1;misc='
            ],
            "kultur": [
                'http://a.adtech.de/addyn/3.0/1582.1/0/0/-1/ADTECH;loc=100;grp=%5Bgroup%5D;alias=SB_AftenpostenPluss_Mobile:Kultur:NetBoard1;misc=',
                'http://a.adtech.de/addyn/3.0/1582.1/0/0/-1/ADTECH;loc=100;grp=%5Bgroup%5D;alias=SB_AftenpostenPluss_Mobile:Kultur:TopBoard;misc='
            ],
            "økonomi": [
                'http://a.adtech.de/addyn/3.0/1582.1/0/0/-1/ADTECH;loc=100;grp=%5Bgroup%5D;alias=SB_AftenpostenPluss_Mobile:Okonomi:NetBoard1;misc=',
                'http://a.adtech.de/addyn/3.0/1582.1/0/0/-1/ADTECH;loc=100;grp=%5Bgroup%5D;alias=SB_AftenpostenPluss_Mobile:Okonomi:TopBoard;misc='
            ],
            "osloby": [
                'http://a.adtech.de/addyn/3.0/1582.1/0/0/-1/ADTECH;loc=100;grp=%5Bgroup%5D;alias=SB_AftenpostenPluss_Mobile:Osloby:TopBoard;misc=',
                'http://a.adtech.de/addyn/3.0/1582.1/0/0/-1/ADTECH;loc=100;grp=%5Bgroup%5D;alias=SB_AftenpostenPluss_Mobile:Osloby:NetBoard1;misc='
            ],
            "bil": [
                'http://a.adtech.de/addyn/3.0/1582.1/0/0/-1/ADTECH;loc=100;grp=%5Bgroup%5D;alias=SB_AftenpostenPluss_Mobile:Bil:TopBoard;misc=',
                'http://a.adtech.de/addyn/3.0/1582.1/0/0/-1/ADTECH;loc=100;grp=%5Bgroup%5D;alias=SB_AftenpostenPluss_Mobile:Bil:NetBoard1;misc='
            ],
            "reise": [
                'http://a.adtech.de/addyn/3.0/1582.1/0/0/-1/ADTECH;loc=100;grp=%5Bgroup%5D;alias=SB_AftenpostenPluss_Mobile:Reise:NetBoard1;misc=',
                'http://a.adtech.de/addyn/3.0/1582.1/0/0/-1/ADTECH;loc=100;grp=%5Bgroup%5D;alias=SB_AftenpostenPluss_Mobile:Reise:TopBoard;misc='
            ],
            "sport": [
                'http://a.adtech.de/addyn/3.0/1582.1/0/0/-1/ADTECH;loc=100;grp=%5Bgroup%5D;alias=SB_AftenpostenPluss_Mobile:Sport:NetBoard1;misc=',
                'http://a.adtech.de/addyn/3.0/1582.1/0/0/-1/ADTECH;loc=100;grp=%5Bgroup%5D;alias=SB_AftenpostenPluss_Mobile:Sport:TopBoard;misc='
            ],
            "bolig": [
                'http://a.adtech.de/addyn/3.0/1582.1/0/0/-1/ADTECH;loc=100;grp=%5Bgroup%5D;alias=SB_AftenpostenPluss_Mobile:Bolig:TopBoard;misc=',
                'http://a.adtech.de/addyn/3.0/1582.1/0/0/-1/ADTECH;loc=100;grp=%5Bgroup%5D;alias=SB_AftenpostenPluss_Mobile:Bolig:NetBoard1;misc='
            ],
            "familie": [
                'http://a.adtech.de/addyn/3.0/1582.1/0/0/-1/ADTECH;loc=100;grp=%5Bgroup%5D;alias=SB_AftenpostenPluss_Mobile:Familie:TopBoard;misc=',
                'http://a.adtech.de/addyn/3.0/1582.1/0/0/-1/ADTECH;loc=100;grp=%5Bgroup%5D;alias=SB_AftenpostenPluss_Mobile:Familie:NetBoard1;misc='
            ],
            "jobb": [
                'http://a.adtech.de/addyn/3.0/1582.1/0/0/-1/ADTECH;loc=100;grp=%5Bgroup%5D;alias=SB_AftenpostenPluss_Mobile:Jobb:NetBoard1;misc=',
                'http://a.adtech.de/addyn/3.0/1582.1/0/0/-1/ADTECH;loc=100;grp=%5Bgroup%5D;alias=SB_AftenpostenPluss_Mobile:Jobb:TopBoard;misc='
            ],
            "other": [
                'http://a.adtech.de/addyn/3.0/1582.1/0/0/-1/ADTECH;loc=100;grp=%5Bgroup%5D;alias=SB_AftenpostenPluss_Mobile:Other:TopBoard;misc=',
                'http://a.adtech.de/addyn/3.0/1582.1/0/0/-1/ADTECH;loc=100;grp=%5Bgroup%5D;alias=SB_AftenpostenPluss_Mobile:Other:NetBoard1;misc='
            ]
        };

        var sectionArray = banners[sectionName] || banners["other"];

        var randomBanner = Math.floor(Math.random() * sectionArray.length);
        var url = sectionArray[randomBanner] + new Date().getTime();

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
