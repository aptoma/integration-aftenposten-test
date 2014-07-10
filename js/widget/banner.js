define('js/widgets/banner', ['alf'], function(Alf){
    "use strict";
    var $ = Alf.dom;

    var trafficScript = 'http://www.aftenposten.no/resources/js/mno/utils/trafficfund_fif.js';

    return {
        selector: '.banner-fullwidth',

        run: function(done){
            var container = this.container;
            container.$el.empty();

            var bannerArr = [
                'http://adserver.adtech.de/addyn|3.0|995.1|5024934|0|1744|ADTECH;cookie=info;alias=iPad_app_AP_Toppbanner_980x150;loc=100;target=_blank;key=key1+key2+key3+key4;grp=[group];misc=',
                'http://adserver.adtech.de/addyn|3.0|995.1|5024933|0|1744|ADTECH;cookie=info;alias=iPad_app_AP_Midtbanner1_980x150;loc=100;target=_blank;key=key1+key2+key3+key4;grp=[group];misc='
            ];
            var randomBanner = Math.floor(Math.random()*bannerArr.length);
            var url = bannerArr[randomBanner] + new Date().getTime();

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
});

define('js/widgets/phonebanner', ['alf'], function(Alf){
    "use strict";
    var $ = Alf.dom;
    var trafficScript = 'http://www.aftenposten.no/resources/js/mno/utils/trafficfund_fif.js';

    return {
        selector: '.phone-banner',

        run: function(done){
            var container = this.container;
            container.$el.empty();

            var bannerArr = [
                'http://a.adtech.de/addyn/3.0/995.1/0/0/-1/ADTECH;loc=100;grp=[group];alias=MobilAPpluss_Bil-Top-5;misc=',
                'http://a.adtech.de/addyn/3.0/995.1/0/0/-1/ADTECH;loc=100;grp=[group];alias=MobilAPpluss_Bil-Other1-5;misc=',
                'http://a.adtech.de/addyn/3.0/995.1/0/0/-1/ADTECH;loc=100;grp=[group];alias=MobilAPpluss_Default-Top-5;misc=',
                'http://a.adtech.de/addyn/3.0/995.1/0/0/-1/ADTECH;loc=100;grp=[group];alias=MobilAPpluss_Default-Other1-5;misc=',
                'http://a.adtech.de/addyn/3.0/995.1/0/0/-1/ADTECH;loc=100;grp=[group];alias=MobilAPpluss_Familie-Top-5;misc=',
                'http://a.adtech.de/addyn/3.0/995.1/0/0/-1/ADTECH;loc=100;grp=[group];alias=MobilAPpluss_Familie-Other1-5;misc=',
                'http://a.adtech.de/addyn/3.0/995.1/0/0/-1/ADTECH;loc=100;grp=[group];alias=MobilAPpluss_Kultur-Top-5;misc=',
                'http://a.adtech.de/addyn/3.0/995.1/0/0/-1/ADTECH;loc=100;grp=[group];alias=MobilAPpluss_Kultur-Other1-5;misc=',
                'http://a.adtech.de/addyn/3.0/995.1/0/0/-1/ADTECH;loc=100;grp=[group];alias=MobilAPpluss_Nyheter-Top-5;misc=',
                'http://a.adtech.de/addyn/3.0/995.1/0/0/-1/ADTECH;loc=100;grp=[group];alias=MobilAPpluss_Nyheter-Other1-5;misc=',
                'http://a.adtech.de/addyn/3.0/995.1/0/0/-1/ADTECH;loc=100;grp=[group];alias=MobilAPpluss_Osloby-Top-5;misc=',
                'http://a.adtech.de/addyn/3.0/995.1/0/0/-1/ADTECH;loc=100;grp=[group];alias=MobilAPpluss_Osloby-Netboard1-5;misc=',
                'http://a.adtech.de/addyn/3.0/995.1/0/0/-1/ADTECH;loc=100;grp=[group];alias=MobilAPpluss_Reise-Top-5;misc=',
                'http://a.adtech.de/addyn/3.0/995.1/0/0/-1/ADTECH;loc=100;grp=[group];alias=MobilAPpluss_Reise-Other1-5;misc=',
                'http://a.adtech.de/addyn/3.0/995.1/0/0/-1/ADTECH;loc=100;grp=[group];alias=MobilAPpluss_Sport-Top-5;misc=',
                'http://a.adtech.de/addyn/3.0/995.1/0/0/-1/ADTECH;loc=100;grp=[group];alias=MobilAPpluss_Sport-Other1-5;misc=',
                'http://a.adtech.de/addyn/3.0/995.1/0/0/-1/ADTECH;loc=100;grp=[group];alias=MobilAPpluss_Okonomi-Top-5;misc=',
                'http://a.adtech.de/addyn/3.0/995.1/0/0/-1/ADTECH;loc=100;grp=[group];alias=MobilAPpluss_Okonomi-Other1-5;misc=',
                'http://a.adtech.de/addyn/3.0/995.1/0/0/-1/ADTECH;loc=100;grp=[group];alias=MobilAPpluss_Jobb-Top-5;misc=',
                'http://a.adtech.de/addyn/3.0/995.1/0/0/-1/ADTECH;loc=100;grp=[group];alias=MobilAPpluss_Jobb-Other1-5;misc=',
                'http://a.adtech.de/addyn/3.0/995.1/0/0/-1/ADTECH;loc=100;grp=[group];alias=MobilAPpluss_Bolig-Top-5;misc=',
                'http://a.adtech.de/addyn/3.0/995.1/0/0/-1/ADTECH;loc=100;grp=[group];alias=MobilAPpluss_Bolig-Other1-5;misc='
            ];
            var randomBanner = Math.floor(Math.random()*bannerArr.length);
            var url = bannerArr[randomBanner] + new Date().getTime();

            var phoneadwrapper = document.createElement('div');
            phoneadwrapper.className = 'phone-ad-wrap';
            var iframe = document.createElement('iframe');
            iframe.className = 'ad-iframe';
            iframe.scrolling='no';
            var html = '<body marginwidth="0" marginheight="0" leftmargin="0" topmargin="0" rightmargin="0">'
                + '<scr'+'ipt  src="' +
                url +
                '"></scri'+'pt>'+
                '<scr'+'ipt >;window.trafficfund_domain="aftenposten.no";</scri'+'pt>'+
                '<scr'+'ipt  src="' +
                trafficScript +
                '"></scri'+'pt>'+
                '</body>';
            iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
            phoneadwrapper.appendChild(iframe);
            container.$el.append(phoneadwrapper);

            done();
        }
    };
});
