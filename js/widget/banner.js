define('js/widgets/banner', ['alf'], function(Alf){
    "use strict";
    var $ = Alf.dom;

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
            iframe.scrolling='no';
            var html = '<body marginwidth="0" marginheight="0" leftmargin="0" topmargin="0" rightmargin="0"><scr'+'ipt language="javascript1.1" src="' + url + '"></scri'+'pt></body>';
            iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
            container.$el.append(iframe);

            done();
        }
    };
});

define('js/widgets/phonebanner', ['alf'], function(Alf){
    "use strict";
    var $ = Alf.dom;

    return {
        selector: '.phone-banner',

        run: function(done){
            var container = this.container;
            container.$el.empty();

            var url = "http://a.adtech.de/addyn/3.0/995.1/0/0/-1/ADTECH;loc=100;grp=[group];alias=MobilAPpluss_Default-Top-5;misc=" + new Date().getTime();
            var phoneadwrapper = document.createElement('div');
            phoneadwrapper.className = 'phone-ad-wrap';
            var iframe = document.createElement('iframe');
            iframe.className = 'ad-iframe';
            iframe.scrolling='no';
            var html = '<body marginwidth="0" marginheight="0" leftmargin="0" topmargin="0" rightmargin="0">'
                + '<scr'+'ipt language="javascript1.1" src="' + url + '"></scri'+'pt></body>';
            iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
            phoneadwrapper.appendChild(iframe);
            container.$el.append(phoneadwrapper);

            done();
        }
    };
});
